chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download_image") {
    chrome.downloads.download({
      url: request.url,
      filename: `facebook_photo_${Date.now()}.jpg`, // Optional: custom filenames
      conflictAction: 'uniquify'
    });
  }
});
