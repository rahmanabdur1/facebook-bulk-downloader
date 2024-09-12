chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'fetch_photos') {
      const photoElements = document.querySelectorAll('img'); // Example selector
      const photoUrls = Array.from(photoElements).map(img => img.src);
      
      sendResponse({ success: true, photos: photoUrls });
    }
  });
  