import { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * width,
      radius: 2 + Math.random() * 2,
      dx: -2 + Math.random() * 4,
      dy: -2 + Math.random() * 4,
      dz: -2 + Math.random() * 4,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        // Perspective projection
        let scale = 400 / (400 + p.z);
        let px = width / 2 + (p.x - width / 2) * scale;
        let py = height / 2 + (p.y - height / 2) * scale;
        ctx.beginPath();
        ctx.arc(px, py, p.radius * scale, 0, 2 * Math.PI);
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        ctx.fillStyle = isDark ? 'rgba(17, 153, 142, 0.33)' : 'rgba(9, 142, 126, 0.22)';
        ctx.shadowColor = isDark ? '#f6d365' : '#2575fc';
        ctx.shadowBlur = 16 * scale;
        ctx.fill();
      }
    }

    function update() {
      for (let p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        p.z += p.dz;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
        if (p.z < -200 || p.z > width) p.dz *= -1;
      }
    }

    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
