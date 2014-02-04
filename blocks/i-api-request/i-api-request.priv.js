BEM.blocks['i-ajax-proxy'].allowBlock('i-api-request');

BEM.decl('i-api-request', null, {
   _getRequestHeaders: function (hostname) {
        return {
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate',
            'host': hostname, //bug with Host when capitalized in https://github.com/mikeal/request/
            'Connection': 'keep-alive'
        };
    },
    _requestApi: function (method, parsedUrl, hostIp, data) {
            var promise = Vow.promise(),
                _this = this,
                requestOptions = this._buildRequestOptions(method, parsedUrl, hostIp, data),
                originalUrl = this._getUri(parsedUrl, data && data.params);

            if (data && data.body) {
                requestOptions.body = this._normalizeBody(data.body);
            }
            console.log('arguments', arguments);
            console.log('options', requestOptions);
            request(requestOptions, function (err, res, encodedBody) {
                console.log("request result", err, res);
                if (err) {
                    if (err.code === 'ETIMEDOUT') {
                        console.error(['ETIMEDOUT', method, originalUrl].join(' '));
                        promise.reject(new _this._HttpError(500, ['ETIMEDOUT', method, originalUrl].join(' ')));
                    } else {
                        promise.reject(err);
                    }
                } else {
                    console.log("try decode");
                    _this._decodeBody(res, encodedBody, function (err, body) {
                        console.log('decoded', err, body);
                        if (err) {
                            promise.reject(err);
                        } else {
                            if (res.statusCode !== 200) {
                                console.error([res.statusCode, method, originalUrl].join(' '));
                                promise.reject(new _this._HttpError(
                                    res.statusCode,
                                    [method, originalUrl].join(' ')
                                ));
                            } else if (data && data.requestSource === 'ajax') {
                                promise.fulfill(body);
                            } else {
                                _this._parse(promise, body);
                            }
                        }
                    });
                }
            });

            return promise;
        },
        _apiHost: 'http://localhost:4000/'

});
