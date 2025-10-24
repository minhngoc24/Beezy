/* global chrome */
import React, { useState, useEffect } from "react";

export default function Settings() {
  const [blockedSites, setBlockedSites] = useState([]);
  const [newSite, setNewSite] = useState("");

  // Load list saved from chrome.storage.sync  
  useEffect(() => {
    chrome?.storage?.sync?.get(["blockedSites"], (res) => {
      if (res.blockedSites) setBlockedSites(res.blockedSites);
    });
  }, []);

  // Save new list
  const saveToStorage = (updated) => {
    chrome?.storage?.sync?.set({ blockedSites: updated });
  };

  // Add new site
  const handleAdd = () => {
    if (!newSite.trim()) return;
    const updated = [...blockedSites, newSite.trim()];
    setBlockedSites(updated);
    saveToStorage(updated);
    setNewSite("");
  };

  // Remove site
  const handleRemove = (index) => {
    const updated = blockedSites.filter((_, i) => i !== index);
    setBlockedSites(updated);
    saveToStorage(updated);
  };

  // Reset default
  const handleReset = () => {
    const defaults = ["facebook.com", "tiktok.com", "youtube.com"];
    setBlockedSites(defaults);
    saveToStorage(defaults);
  };

  return (
    <div
      style={{
        backgroundColor: "#FFEB3B",
        height: "100%",
        padding: 20,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>⚙️ Settings</h2>

      {/* Add new site */}
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <input
          type="text"
          value={newSite}
          onChange={(e) => setNewSite(e.target.value)}
          placeholder="Nhập domain..."
          style={{
            flex: 1,
            borderRadius: 8,
            border: "1px solid #000",
            padding: "6px 10px",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Thêm
        </button>
      </div>

      {/* Lists */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {blockedSites.map((site, index) => (
          <li
            key={index}
            style={{
              background: "#FFF176",
              borderRadius: 6,
              marginBottom: 8,
              padding: "6px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{site}</span>
            <button
              onClick={() => handleRemove(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: 6,
                padding: "2px 8px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      {/* Reset */}
      <button
        onClick={handleReset}
        style={{
          marginTop: 15,
          background: "#fff",
          border: "1px solid #000",
          borderRadius: 8,
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >
        Reset mặc định
      </button>
    </div>
  );
}
