// Process requests from content script.
function process_request(data, sender, callback) {
    var response = {};

    if (data.action == 'init') {
        console.log('Recieve from content script' );
        console.log(data);

        response.flag = 1;
        response.msg = 'done init';

        // Send back to content script.
        callback(response);
    } else {
        alert('Unsupported action: ' + data);
    }
}

// Called when content script sends a request to background page.
chrome.extension.onRequest.addListener(process_request);


function on_browser_action(tab) {
    // todo: error occurs without following codes.
    console.log('on_browser_action');

    chrome.windows.getLastFocused(function(win) {
        // http://code.google.com/chrome/extensions/windows.html#type-Window
        var win_id = win.id;

        var query_info = {
            active: true,
            windowId: win_id
        };
        chrome.tabs.query(query_info, function(tabs){
            for (var i = 0; i < tabs.length; i++) {
                var tab = tabs[i];

                // http://code.google.com/chrome/extensions/tabs.html#type-Tab
                console.log(tab.title + '(' + tab.url + ')');
            }
        });
    });

    chrome.tabs.executeScript(null, {
        code: "print_url();"
    });
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(on_browser_action);

// =================================================================

function check_https(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('https') > -1) {
    // Show the page action.
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(check_https);
