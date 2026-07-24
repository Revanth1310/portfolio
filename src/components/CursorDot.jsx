import { useEffect, useRef } from "react";

export default function CursorDot() {
  const ref = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return <div id="cursor" ref={ref} aria-hidden="true" />;
}
