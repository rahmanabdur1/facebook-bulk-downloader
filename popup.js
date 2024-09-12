document.getElementById('downloadPhotos').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: downloadPhotos
    });
  });
  
  function downloadPhotos() {
    // Communicate with the content script to extract image URLs
    chrome.runtime.sendMessage({ message: 'fetch_photos' }, function(response) {
      if (response.success && response.photos.length) {
        response.photos.forEach((photoUrl, index) => {
          chrome.downloads.download({
            url: photoUrl,
            filename: `facebook-photo-${index + 1}.jpg`
          });
        });
      } else {
        document.getElementById('status').innerText = 'No photos found.';
      }
    });
  }
  