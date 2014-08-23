var KLPRouter = function(routes) {
    this.routes = routes || {};
    var that = this;

    var getQueryParams = function(hash) {
        var queryParams = {};
        var hashSplit = hash.split("?");

        if (hashSplit.length > 1) {
            hash = hashSplit[0];
            var queryParamsString = hashSplit[1];
            var queryParamsSplit = queryParamsString.split("&");

            for (var i = 0; i < queryParamsSplit.length; i++) {
                var temp = queryParamsSplit[i].split("=");
                if (temp.length == 2){
                    queryParams[temp[0]] = temp[1];
                }
            };
        }
        return queryParams;       
    };

    var getQueryString = function(queryObj) {
        var paramsArray = [];
        for (var param in queryObj) {
            if (queryObj.hasOwnProperty(param)) {
                var s = param + '=' + queryObj[param];
                paramsArray.push(s);
            }
        }
        return paramsArray.join('&');
    };

    this.hashChanged = function() {
        var hash = window.location.hash.substr(1, window.location.hash.length-1);
        var queryParams = getQueryParams(hash);

        for (pattern in routes) {
            var regex = new RegExp(pattern, "i");
            var matches = regex.exec(hash);

            if (matches !== null && matches.length > 0) {
                routes[pattern](matches, queryParams);
            }
        }
    };

    this.setHash = function(url, queryParams, options) {
        /*
            url <string>: new url base fragment
            queryParams <obj>: object of query params to change
            options: obj
                - trigger <boolean> whether to trigger hashchange event
                - replace <boolean> whether to 'replace' URL without
                        creating event in history
                replace can be set to true only if trigger is false.
         */
        var defaults = {
            'trigger': true,
            'replace': false
        };
        var opts = $.extend(defaults, options);
        var hash = window.location.hash.substr(1, window.location.hash.length-1);
        var hashSplit = hash.split("?");
        if (!url) {
            url = hashSplit[0];
        }
        var currentParams = getQueryParams(hash);
        var newParams = $.extend(currentParams, queryParams);
        var newHash = url + '?' + getQueryString(newParams);
        if (opts.trigger) {
            location.hash = newHash;
        } else if (!opts.replace) {
            history.pushState(null, null, '#' + newHash);
        } else {
            history.replaceState(null, null, '#' + newHash);
        }

    };

    this.init = function() {
        window.addEventListener("hashchange", this.hashChanged, false);

        if (window.location.hash !== "") {
            this.hashChanged();
        }
    };
};
