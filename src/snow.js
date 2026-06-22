// Snow Fall Effect - Subtle and Fine
export function initSnowEffect() {
  const canvas = document.createElement('canvas');
  canvas.id = 'snow-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    opacity: 0.6;
  `;
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');

  // Snowflakes configuration - fine and subtle
  const snowflakes = [];
  const maxSnowflakes = 150;
  const minSize = 1;
  const maxSize = 3;
  const speed = 0.3;
  const wind = 0.05;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create snowflake
  function createSnowflake() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * (maxSize - minSize) + minSize,
      speed: Math.random() * speed + 0.2,
      wind: Math.random() * wind - wind / 2,
      opacity: Math.random() * 0.5 + 0.3,
      drift: Math.random() * Math.PI * 2
    };
  }

  // Initialize snowflakes
  for (let i = 0; i < maxSnowflakes; i++) {
    const flake = createSnowflake();
    flake.y = Math.random() * canvas.height;
    snowflakes.push(flake);
  }

  // Draw a single snowflake
  function drawSnowflake(flake) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    ctx.fill();

    // Add subtle glow for larger snowflakes
    if (flake.size > 2) {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size + 1, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 220, 255, ${flake.opacity * 0.3})`;
      ctx.fill();
    }
  }

  // Update snowflake position
  function updateSnowflake(flake) {
    flake.y += flake.speed;
    flake.drift += 0.02;
    flake.x += Math.sin(flake.drift) * 0.5 + flake.wind;

    // Reset when off screen
    if (flake.y > canvas.height + 10) {
      flake.y = -10;
      flake.x = Math.random() * canvas.width;
    }

    // Wrap horizontally
    if (flake.x > canvas.width + 10) flake.x = -10;
    if (flake.x < -10) flake.x = canvas.width + 10;
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(flake => {
      updateSnowflake(flake);
      drawSnowflake(flake);
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Reduce snowflakes on mobile for performance
  if ('ontouchstart' in window) {
    snowflakes.length = Math.floor(maxSnowflakes * 0.4);
  }
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  const canvas = document.getElementById('snow-canvas');
  if (canvas) canvas.remove();
});
