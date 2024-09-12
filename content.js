function downloadImages() {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    const url = img.src;
    if (url) {
      chrome.runtime.sendMessage({ action: "download_image", url: url });
    }
  });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download_photos") {
    downloadImages();
  }
});
