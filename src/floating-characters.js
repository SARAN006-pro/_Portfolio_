/**
 * FLOATING PARTICLES EFFECT
 * Lightweight particle system for premium dark mode portfolio
 * Subtle, slow-moving particles that don't distract
 */

class FloatingParticles {
    constructor() {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'floating-chars-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.opacity = '0.4';
        
        document.body.insertBefore(this.canvas, document.body.firstChild);
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        
        // Configuration for subtle effect
        this.particleCount = 50; // Lightweight - only 50 particles
        this.particleSpeed = 0.3; // Very slow movement
        
        // Bind methods
        this.resize = this.resize.bind(this);
        this.animate = this.animate.bind(this);
        
        // Initialize
        window.addEventListener('resize', this.resize);
        this.resize();
        this.createParticles();
        this.animate();
    }
    
    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.createParticles();
    }
    
    createParticles() {
        this.particles = [];
        
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 2 + 1, // Small particles (1-3px)
                speedX: (Math.random() - 0.5) * this.particleSpeed,
                speedY: Math.random() * this.particleSpeed + 0.2, // Gentle downward drift
                opacity: Math.random() * 0.5 + 0.3, // Subtle opacity (0.3-0.8)
            });
        }
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around screen
            if (particle.y > this.height) {
                particle.y = 0;
                particle.x = Math.random() * this.width;
            }
            if (particle.x > this.width) particle.x = 0;
            if (particle.x < 0) particle.x = this.width;
            
            // Draw particle as soft circle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(96, 165, 250, ${particle.opacity})`; // Soft blue
            this.ctx.fill();
            
            // Add subtle glow
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 2
            );
            gradient.addColorStop(0, `rgba(96, 165, 250, ${particle.opacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });
    }
    
    animate() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Draw particles
        this.drawParticles();
        
        requestAnimationFrame(this.animate);
    }
    
    destroy() {
        window.removeEventListener('resize', this.resize);
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Initialize floating particles when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    new FloatingParticles();
});
