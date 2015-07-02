CloudFlare.define(
    'lingumania',
    ['lingumania/config'],
    function (config) {
        var url = 'https://az596610.vo.msecnd.net/lingumania.admin.js?cf';
        CloudFlare.require([url]);
    }
);