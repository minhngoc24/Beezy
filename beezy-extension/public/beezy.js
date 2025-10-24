console.log("Beezy content script running");

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "showBee") {
    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("bee.png");
    img.style = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 120px;
      z-index: 999999;
      animation: fly 1s infinite alternate;
    `;
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 4000);
  }
});
