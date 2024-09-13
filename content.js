// Function to scan the Facebook page for images and return the URLs
function scanForImages() {
  const images = document.querySelectorAll('img');
  let imageUrls = [];

  images.forEach((img) => {
    const url = img.src;
    if (url && !imageUrls.includes(url)) {
      imageUrls.push(url);
    }
  });

  return imageUrls;
}

// Listen for messages from the popup script or background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scan_images') {
    const imageUrls = scanForImages();

    if (imageUrls.length > 0) {
      sendResponse({ urls: imageUrls });
    } else {
      sendResponse({ urls: [], message: 'No images found on this page!' });
    }
  }
});
