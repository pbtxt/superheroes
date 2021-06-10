import React from "react";

export default function LoadingCircle() {
  return (
    <div className="loading">
      <div className="loading__wrapper">
        <svg className="loading__circle" viewBox="0 0 60 60">
          <circle className="loading__path" cx="30" cy="30" r="25" />
        </svg>
      </div>
    </div>
  );
}
