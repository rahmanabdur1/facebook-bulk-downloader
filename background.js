chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "download_images") {
    const urls = request.urls;
    urls.forEach((url, index) => {
      chrome.downloads.download({
        url: url,
        filename: `facebook_image_${index + 1}.jpg`,
        conflictAction: 'uniquify'
      });
    });
    sendResponse({ message: "Downloading images..." });
  }
});
