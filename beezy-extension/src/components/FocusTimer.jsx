import React, { useEffect, useState } from "react";

export default function FocusTimer() {
  const [minutes, setMinutes] = useState("");     // user input
  const [seconds, setSeconds] = useState(0);      // total seconds remaining
  const [running, setRunning] = useState(false);  // running state

  // Update seconds when user inputs new time (only when not running)
  useEffect(() => {
    if (!running && minutes !== "") {
      setSeconds(Number(minutes) * 60);
    }
  }, [minutes, running]);

  // Countdown
  useEffect(() => {
    let timer;
    if (running && seconds > 0) {
      timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else if (running && seconds === 0) {
      setRunning(false);
      alert("Time's up! Beezy congratulates you on finishing your focus session!");
    }
    return () => clearInterval(timer);
  }, [running, seconds]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(Number(minutes) * 60);
  };

  const handleStart = () => {
    if (minutes === "" || Number(minutes) <= 0) {
      alert("⏳ Please enter a valid focus time in minutes!");
      return;
    }
    setRunning(true);
  };

  return (
    <div style={{ textAlign: "center", padding: 20, backgroundColor: "#FFEB3B", height: "100%" }}>
      <h2>Focus Time</h2>
      <h1>{formatTime(seconds)}</h1>

      {/* Enter time */}
      <div style={{ marginBottom: 10 }}>
        <label>Time (minutes): </label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          min="1"
          max="180"
          disabled={running}
          style={{ width: 80, textAlign: "center", borderRadius: 8, border: "1px solid #000" }}
        />
      </div>

      {/* Control buttons */}
      {!running ? (
        <button onClick={handleStart} style={{ margin: 5 }}>
          Bắt đầu
        </button>
      ) : (
        <button onClick={() => setRunning(false)} style={{ margin: 5 }}>
          Tạm dừng
        </button>
      )}
      <button onClick={handleReset} style={{ margin: 5 }}>
        Reset
      </button>

      {/* Blocked pages */}
      <div style={{ marginTop: 20 }}>
        <h4>Blocked pages</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>facebook.com</li>
          <li>tiktok.com</li>
          <li>youtube.com</li>
        </ul>
      </div>
    </div>
  );
}
