(function() {
    var data = {
        'action': 'init'
    };
    chrome.extension.sendRequest(data, function(response) {
        if (response.flag == 1) {
            console.log(response.msg);
        }
    });
})();

function print_url() {
    console.log(location.href);
}
