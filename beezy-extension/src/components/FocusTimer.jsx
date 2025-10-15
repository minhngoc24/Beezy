import React, { useEffect, useState } from "react";

export default function FocusTimer() {
  const [seconds, setSeconds] = useState(0);      // begin at 0
  const [running, setRunning] = useState(false); // set running time status

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds((s) => s + 1), 1000); // create timer when user begins
    }
    return () => clearInterval(timer); // clear timer when stop or close components
  }, [running]);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Thời gian tập trung</h2>
      <h1>{formatTime(seconds)}</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? "Tạm dừng" : "Bắt đầu"}
      </button>
      <button onClick={() => setSeconds(0)}>Reset</button>

      <div style={{ marginTop: 10 }}>
        <h4>Trang bị chặn:</h4>
        <ul>
          <li>facebook.com</li>
          <li>tiktok.com</li>
          <li>youtube.com</li>
        </ul>
      </div>
    </div>
  );
}
