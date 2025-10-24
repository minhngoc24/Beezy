
console.log("Beezy background worker loaded!");


chrome.runtime.onInstalled.addListener(() => {
  console.log("Beezy installed or updated.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(" Received message:", message);

  if (message.action === "buzz") {
    console.log("Buzz! User is distracted.");
  }

  sendResponse({ ok: true });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && /(facebook|youtube|tiktok)\.com/.test(tab.url)) {
      chrome.tabs.sendMessage(tabId, { action: "showBee" });
    }
  });