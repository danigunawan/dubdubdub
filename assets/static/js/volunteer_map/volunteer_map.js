(function() {
    var t = klp.volunteer_map = {};

    var map;
    t.init = function() {
        load_map();

        var sidebar_height = $("#sidebar_wrapper").height();
        $('#sidebar_wrapper ul').slimScroll({
            height: sidebar_height+'px',
            size: '5px',
            color: '#8d8d8d',
            railVisible: false
        });

        // Google Geocode Search
        var searchInput = $('.search-input');
        searchInput.on('keypress', function(e) {
            if (e.keyCode === 13) {
                search($(e.target).val());
                }
            });

        function search(query) {
            var apiKey = "AIzaSyB19tHGJ8R3eX3JhR655zzo72dyB4628vc";
            query = query+", Karnataka";
            var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+query+"&region=in&key="+apiKey;
            $.ajax({
                url: url
            }).done(function (data) {
                if (data.results.length > 0) {
                    var location = data.results[0].geometry.location;
                    var resultLocation = L.latLng([location.lat, location.lng]);
                    map.setView(resultLocation, 15);
                }
            });
        }

        function setURL() {
            var currentZoom = map.getZoom();
            var mapCenter = map.getCenter();
            var mapURL = currentZoom+'/'+mapCenter.lat.toFixed(5)+'/'+mapCenter.lng.toFixed(5);
            klp.router.setHash(mapURL, {}, {trigger: false, replace: true});
        }

        klp.router.events.on('hashchange', function (event, params) {
            var url = params.url,
                oldURL = params.oldURL;
            if (url === '') {
                setURL();
            } else {
                if (oldURL !== url) {
                    //currentURL = url;
                    var urlSplit = url.split('/');
                    var urlZoom = urlSplit[0];
                    var urlLatLng = L.latLng(urlSplit[1], urlSplit[2]);
                    map.setView(urlLatLng, urlZoom);

                }
            }
        });

        // Map Events
        map.on('moveend', function () {
            setURL();
        });
    };

    function load_map() {
        var southWest = L.latLng(11.57, 73.87),
            northEast = L.latLng(18.45, 78.57),
            bounds = L.latLngBounds(southWest, northEast);
        map = L.map('map_canvas', {maxBounds: bounds}).setView([12.9793998, 77.5903608], 14);
        L.tileLayer('http://geo.klp.org.in/osm/{z}/{x}/{y}.png', {
            maxZoom: 16,
            attribution: 'OpenStreetMap, OSM-Bright'
        }).addTo(map);

        map.locate({setView: true, maxZoom: 15});
    }



})();