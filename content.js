// Function to find and send all image URLs to the background script for downloading
function downloadImages() {
  const images = document.querySelectorAll('img');
  let foundImages = [];

  images.forEach((img) => {
    const url = img.src;
    if (url && !foundImages.includes(url)) {
      foundImages.push(url);
      chrome.runtime.sendMessage({ action: "download_image", url: url });
    }
  });

  if (foundImages.length === 0) {
    alert('No images found on this page!');
  }
}

// Listen for a message from the popup to start downloading images
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download_photos") {
    downloadImages();
  }
});
