from django import http
try:
    import json
except:
    import simplejson as json
import csv
from django.views.generic.base import View, TemplateView
from django.core.exceptions import PermissionDenied
from common.exceptions import APIError
from common.pagination import KLPPaginationSerializer
from rest_framework import generics
from rest_framework_gis.filters import InBBOXFilter


class JSONResponseMixin(object):
    def render_to_response(self, context, status=200):
        "Returns a JSON response containing 'context' as payload"
        return self.get_json_response(self.convert_context_to_json(context), status)

    def get_json_response(self, content, status=200, **httpresponse_kwargs):
        "Construct an `HttpResponse` object."
        return http.HttpResponse(content,
                                 status=status,
                                 content_type='application/json',
                                 **httpresponse_kwargs)

    def convert_context_to_json(self, context):
        "Convert the context dictionary into a JSON object"
        # Note: This is *EXTREMELY* naive; in reality, you'll need
        # to do much more complex handling to ensure that arbitrary
        # objects -- such as Django model instances or querysets
        # -- can be serialized as JSON.
        return json.dumps(context)


class CSVResponseMixin(object):

    def render_json_to_csv(self, json, status=200):
        header_row, csv_data = self._convert_json_csv(json)
        return self.render_to_csv_response(header_row, csv_data, status=status)

    def render_geojson_to_csv(self, geojson, geo_format='json', status=200):
        '''
            converts a geojson object to csv
            geo_format can be either 'json' or 'wkt'.
            If geo_format is wkt, geodata should only contain Points, else an error will be raised.
        '''
        header_row, csv_data = self._convert_geojson_to_csv(geojson, geo_format)
        return self.render_to_csv_response(header_row, csv_data, status=status)

    def render_to_csv_response(self, csv_header_row, csv_data, filename="csv_data.csv", extra_http_headers=[], status=200):
        "render csv response"
        response = http.HttpResponse(content_type="text/csv", status=status)
        response['Content-Disposition'] = 'attachment; filename="%s"' % filename
        writer = csv.writer(response)
        writer.writerow(csv_header_row)
        for row in csv_data:
            writer.writerow(row)
        return response

    def _convert_geojson_to_csv(self, geojson, geo_format):
        "convert geojson obj to csv"
        header_row = []
        data_arr = []
        features = geojson['features']
        #FIXME: if len(features) == 0, raise error
        property_keys = features[0]['properties'].keys()
        if geo_format == 'json':
            header_row = property_keys + ['geometry']
        elif geo_format == 'wkt':
            header_row = property_keys + ['lat', 'lng']
        else:
            raise APIError("Invalid geo format")
        for f in features:
            row = f['properties'].values()
            if geo_format == 'json':
                row = row + [json.dumps(f['geometry'])]
            elif geo_format == 'wkt':
                typ = f['geometry']['type']
                if typ != 'Point':
                    raise APIError("Cannot serialize non-Point geometries to WKT")
                lat = f['geometry']['coordinates'][1]
                lng = f['geometry']['coordinates'][0]
                row = row + [lat, lng]
            data_arr.append(row)
        return (header_row, data_arr,)

    def _convert_json_to_csv(self, json):
        '''
        convert regular json array to csv
        QUESTION: this seems a bit awkward, its not json really, its a list of dicts.
        '''
        #FIXME: if not a list, raise error
        obj = json[0]
        header_row = obj.keys()
        data_arr = [d.values() for d in json]
        return (header_row, data_arr,)


class StaticPageView(TemplateView):
    extra_context = {}

    def get_context_data(self, **kwargs):
        context = super(StaticPageView, self).get_context_data(**kwargs)
        context.update(self.extra_context)
        return context


class KLPListAPIView(generics.ListAPIView):

    pagination_serializer_class = KLPPaginationSerializer
    filter_backends = (InBBOXFilter,)

    def get_paginate_by(self, *args, **kwargs):
        if self.request.accepted_renderer.format == 'csv':
            return None
        per_page = int(self.request.GET.get('per_page', 50)) #FIXME: Number should come from settings
        if per_page == 0:
            return None
        return per_page


class APIView(View, JSONResponseMixin):
    def get(self, *args, **kwargs):
        raise PermissionDenied('Not Permitted')

    def post(self, *args, **kwargs):
        raise PermissionDenied('Not Permitted')

