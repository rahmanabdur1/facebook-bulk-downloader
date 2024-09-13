// Listen for messages from the content script and trigger the download
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download_image") {
    chrome.downloads.download({
      url: request.url,
      filename: `facebook_photo_${Date.now()}.jpg`, // You can customize this filename
      conflictAction: 'uniquify'
    });
  }
});
