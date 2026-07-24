import { useEffect, useRef } from "react";

// Ported 1:1 from the original starsCanvas animation shared by every page.
export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let centerX;
    let centerY;

    const stars = [];
    const starCount = 500;

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = (Math.random() - 0.5) * canvas.width;
        this.y = (Math.random() - 0.5) * canvas.height;
        this.z = Math.random() * canvas.width;
        this.speed = 2;
      }
      update() {
        this.z -= this.speed;
        if (this.z <= 0) this.reset();
        this.draw();
      }
      draw() {
        const x = (this.x / this.z) * centerX + centerX;
        const y = (this.y / this.z) * centerY + centerY;
        const size = (1 - this.z / canvas.width) * 4;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
      }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerX = canvas.width * 0.9;
      centerY = canvas.height / 2;
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.update());
      animationId = requestAnimationFrame(animate);
    }

    resize();
    for (let i = 0; i < starCount; i++) stars.push(new Star());
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="starsCanvas" ref={canvasRef} aria-hidden="true" />;
}
