console.log("Beezy content script active");


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "showBee") {
    showBee();
  }
});

function showBee() {
  const existing = document.getElementById("beezy-buzz");
  if (existing) existing.remove();

  const bee = document.createElement("img");
  bee.id = "beezy-buzz";
  bee.src = chrome.runtime.getURL("bee.png");
  bee.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 120px;
    z-index: 999999;
    animation: fly 3s ease-in-out infinite alternate;
  `;
  document.body.appendChild(bee);

  // auto remove after 5s
  setTimeout(() => bee.remove(), 5000);
}
