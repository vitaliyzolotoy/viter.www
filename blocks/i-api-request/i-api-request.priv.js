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
    _dnsResolve: function (parsedUrl) {
        var promise = Vow.promise(),
            dns = require('dns');
        dns.lookup(parsedUrl.hostname, function (error, ip, type) {
          if (error) {
            promise.reject(new Error('can not resolve' + parsedUrl.hostname));
          } else {
            promise.fulfill(ip);
          }
        });
        return promise;
     },
     _apiHost: 'http://localhost:4000/'
});
