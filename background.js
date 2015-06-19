chrome.browserAction.onClicked.addListener(function(tab){
  console.log("hello background.js", tab);
});
