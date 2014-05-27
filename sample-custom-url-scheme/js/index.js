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
        navigator.notification.confirm(
            'Do you want to navigate?',
            function(btnIndex) {
                Navigate.apply(this, [{btnIndex:btnIndex, url:activeurl}])
            }, // callback
            null, // title
            ['Go Ahead!', 'No']  // buttonName
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
            navigator.notification.confirm(
                'Do you want to navigate?',
                function(btnIndex) {
                    Navigate.apply(this, [{btnIndex:btnIndex, url:activeurl}])
                }, // callback
                null, // title
                ['Go Ahead!', 'No']  // buttonName
                );
        }
    });   
}
	
function Navigate(args) {
    if (args.btnIndex == 1) {
        window.location.href = args.url;
    } else {
        return;
    }
}

function goBack(){
  history.go(-1);
  navigator.app.backHistory();
}