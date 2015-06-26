chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({"url": "chrome-extension://fdmmgilgnpjigdojojpjoooidkmcomcm/index.html"});
});
