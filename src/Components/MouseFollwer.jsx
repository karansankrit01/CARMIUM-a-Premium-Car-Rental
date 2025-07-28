import React, { useState, useEffect } from "react";

function MouseFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: pos.y,
        left: pos.x,
        width: 30,
        height: 30,
        backgroundImage: "url('/car.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
        borderRadius: "50%",
        pointerEvents: "none",
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    />
  );
}

export default MouseFollower;