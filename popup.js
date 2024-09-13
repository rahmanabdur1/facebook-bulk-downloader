document.getElementById('downloadPhotosBtn').addEventListener('click', function() {
  // Query the active tab and send a message to the content script to scan images
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'scan_images' }, function(response) {
      const imageUrls = response.urls;

      if (imageUrls.length > 0) {
        // Send image URLs to the background script to initiate the download
        chrome.runtime.sendMessage({ action: "download_images", urls: imageUrls });
      } else {
        alert(response.message || 'No images found.');
      }
    });
  });
});
