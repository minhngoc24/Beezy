console.log("Beezy background worker loaded!");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Beezy installed or updated.");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    if (/(facebook|youtube|tiktok)\.com/.test(tab.url)) {
      console.log("Distraction detected:", tab.url);

      chrome.tabs
        .sendMessage(tabId, { action: "showBee" })
        .then(() => console.log("Bee message sent to content script"))
        .catch((err) =>
          console.warn("Could not send message (content not ready yet):", err)
        );
    }
  }
});
