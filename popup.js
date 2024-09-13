document.getElementById('downloadPhotosBtn').addEventListener('click', function() {
  // Query the active tab and send a message to the content script
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "download_photos" });
  });
});
