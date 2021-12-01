class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.color = '#ffffff';
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.velocity = {
            x: (Math.random() * 0.6),
            y: (Math.random() * 0.6)
        };
        this.radius = 2.5;
    }

    update() {
        if (this.x > this.canvas.width || this.x < 0)
            this.velocity.x = -this.velocity.x;
        if (this.y > this.canvas.height || this.y < 0)
            this.velocity.y = -this.velocity.y;

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = 0.7;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

export default Particle;