import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Star {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      brightness: number;
      angle: number;
    }

    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
    }

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    const numStars = 100;
    const maxShootingStars = 3;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        brightness: Math.random(),
        angle: Math.random() * Math.PI * 2
      });
    }

    // Create asteroids with more detailed properties
    const asteroids = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      vertices: Math.floor(Math.random() * 3) + 6 // Random number of vertices for variety
    }));

    const createShootingStar = () => {
      if (shootingStars.length < maxShootingStars && Math.random() < 0.02) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: 50 + Math.random() * 50,
          speed: 5 + Math.random() * 10,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          opacity: 1
        });
      }
    };

    const drawStar = (star: Star) => {
      if (!ctx) return;
      
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + star.brightness * 0.7})`;
      ctx.fill();

      // Add twinkle effect
      if (Math.random() < 0.001) {
        star.brightness = Math.random();
      }
    };

    const drawAsteroid = (asteroid: any) => {
      if (!ctx) return;

      ctx.save();
      ctx.translate(asteroid.x, asteroid.y);
      ctx.rotate(asteroid.rotation);
      
      ctx.beginPath();
      for (let i = 0; i < asteroid.vertices; i++) {
        const angle = (i / asteroid.vertices) * Math.PI * 2;
        const radius = asteroid.size * (0.8 + Math.random() * 0.4);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      
      // Create a gradient for more realistic asteroid appearance
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, asteroid.size);
      gradient.addColorStop(0, '#8B7355');
      gradient.addColorStop(1, '#6B5335');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.strokeStyle = '#4A3B2A';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      
      ctx.restore();
    };

    const drawShootingStar = (star: ShootingStar) => {
      if (!ctx) return;

      ctx.save();
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(
        star.x,
        star.y,
        star.x - Math.cos(star.angle) * star.length,
        star.y + Math.sin(star.angle) * star.length
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(
        star.x - Math.cos(star.angle) * star.length,
        star.y + Math.sin(star.angle) * star.length
      );
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(26, 31, 44, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new shooting stars
      createShootingStar();

      // Update and draw stars
      stars.forEach(star => {
        star.x += star.speedX;
        star.y += star.speedY;
        star.angle += 0.02;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        drawStar(star);
      });

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.x += Math.cos(star.angle) * star.speed;
        star.y -= Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;

        if (star.opacity <= 0) {
          shootingStars.splice(i, 1);
        } else {
          drawShootingStar(star);
        }
      }

      // Update and draw asteroids
      asteroids.forEach(asteroid => {
        asteroid.x += asteroid.speedX;
        asteroid.y += asteroid.speedY;
        asteroid.rotation += asteroid.rotationSpeed;

        // Wrap around screen
        if (asteroid.x < -20) asteroid.x = canvas.width + 20;
        if (asteroid.x > canvas.width + 20) asteroid.x = -20;
        if (asteroid.y < -20) asteroid.y = canvas.height + 20;
        if (asteroid.y > canvas.height + 20) asteroid.y = -20;

        drawAsteroid(asteroid);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#1A1F2C]"
    />
  );
};

export default ParticleBackground;