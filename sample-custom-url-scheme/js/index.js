var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        navigator.splashscreen.hide();
        if (device.platform == 'Android') {
            handleURLAndroid();
        }
    },
};

function handleOpenURL(url) {
    if (url !== "") {
        var appPath = window.location.href;
        var path = appPath.substr(0, appPath.lastIndexOf("/") + 1);
        var queryString = url.substr(url.lastIndexOf("//") + 1, url.length);
        var activeurl = path + queryString;
        document.querySelector("#test").innerHTML = "Invocation URL was: " + url;
        navigator.notification.alert(
            'Do you want to navigate?',
            function(btnIndex) {
                Navigate.apply(this, [{btnIndex:btnIndex, url:activeurl}])
            }, // callback
            null, // title
            'Go Ahead!'  // buttonName
            );
    }
}

function handleURLAndroid() {
    window.plugins.webintent.getUri(function(url) {
        if (url !== "") {
            var appPath = window.location.href;
            var path = appPath.substr(0, appPath.lastIndexOf("/") + 1);
            var queryString = url.substr(url.lastIndexOf("//") + 1, url.length);
            var activeurl = path + queryString;
            document.querySelector("#test").innerHTML = "Invocation URL was: " + url;
            navigator.notification.alert(
                'Do you want to navigate?',
                function(btnIndex) {
                    Navigate.apply(this, [{btnIndex:btnIndex, url:activeurl}])
                }, // callback
                null, // title
                'Go Ahead!'  // buttonName
                );
        }
    });   
}	
function Navigate(args) {
    window.location.href = args.url;
}