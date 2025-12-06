import React from "react";

export function InteriorDefault({ text }) {
  return (
    <div className="interior-box" style={{ background: "lightgreen" }}>
      <p className="interior-text">{text}</p>
    </div>
  );
}

export function InteriorDark({ text }) {
  return (
    <div
      className="interior-box"
      style={{ background: "#333", color: "#fff", borderRadius: "8px" }}
    >
      <p className="interior-text" style={{ color: "#fff" }}>
        {text}
      </p>
    </div>
  );
}

export function InteriorGradient({ text }) {
  return (
    <div
      className="interior-box"
      style={{
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        borderRadius: "8px",
      }}
    >
      <p className="interior-text">{text}</p>
    </div>
  );
}

// Main wrapper component using index-based logic
export default function Interior({ text, index }) {
  if (index < 3) return <InteriorDefault text={text} />;
  if (index < 6) return <InteriorDark text={text} />;
  return <InteriorGradient text={text} />;
}
