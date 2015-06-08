CloudFlare.define(
    'lingumania',
    ['lingumania/config'],
    function (config) {
        var url = '//az596610.vo.msecnd.net/lingumania.admin.js';
        CloudFlare.require([url]);
    }
);