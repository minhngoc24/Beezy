import React from "react";
import { Link } from "react-router-dom";
import bee from "../bee.png"; // make sure to have bee.png in /src or /public

export default function Welcome() {
  return (
    <div
      style={{
        backgroundColor: "#FFEB3B",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* 🐝 Icon Beezy */}
      <img
        src={bee}
        alt="Beezy"
        style={{ width: 120, marginBottom: 20 }}
      />

      {/* Title */}
      <h1 style={{ fontSize: 22, fontWeight: "bold", color: "#000" }}>
        Beezy Focus Mode
      </h1>

      {/* Static Clock */}
      <h2
        style={{
          fontSize: 40,
          fontWeight: "bold",
          margin: "10px 0 20px 0",
          color: "#000",
        }}
      >
        25:00
      </h2>

      {/* Start Button */}
      <Link to="/focus" style={{ textDecoration: "none" }}>
        <button
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 30,
            padding: "10px 24px",
            fontWeight: "bold",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Start Focus Mode
        </button>
      </Link>

      {/* Slogan */}
      <p style={{ marginTop: 15, color: "#000", fontSize: 14 }}>
        Stay Beezy. Stay Focused.
      </p>
    </div>
  );
}
