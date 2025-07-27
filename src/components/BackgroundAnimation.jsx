import React, { useRef, useEffect } from "react";

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const particles = [];
  const PARTICLE_COUNT = 50;

  class Particle {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = 2 + Math.random() * 3;
      this.color = `rgba(164, 200, 240, ${0.1 + Math.random() * 0.3})`; // bleu pastel translucide
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
    }
    update(width, height) {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > width) this.speedX *= -1;
      if (this.y < 0 || this.y > height) this.speedY *= -1;
    }
    draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 6;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(width, height));
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update(width, height);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    // Resize listener
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
}
