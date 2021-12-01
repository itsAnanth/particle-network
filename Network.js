// import Particle from "./Particle.js";


class Network {
    constructor(canvas) {
        this.particles = [];
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.fadeRange = 130;
    }

    init() {
        for (let i = 0; i < 50; i++)
            this.particles.push(new Particle(this.canvas))
        this.particles.forEach(particle => {
            particle.draw();
        })
        this.update()
    }

    calcDistance(x, y) {
        return Math.sqrt(Math.pow(x - x, 2) + Math.pow(y - y, 2));
    }

    update() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        // console.log('ye1')
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
            this.particles[i].draw();

            // Draw connections
            for (let j = this.particles.length - 1; j > i; j--) {
                let distance = Math.sqrt(
                    Math.pow(this.particles[i].x - this.particles[j].x, 2)
                    + Math.pow(this.particles[i].y - this.particles[j].y, 2)
                );
                // console.log(d1, distance)
                if (distance > this.fadeRange) continue;
            

                this.ctx.beginPath();
                this.ctx.strokeStyle = '#ffffff';
                this.ctx.globalAlpha = (this.fadeRange - distance) / this.fadeRange;
                this.ctx.lineWidth = 0.7;
                this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                this.ctx.stroke();
            }
        }


        requestAnimationFrame(this.update.bind(this));
    }
}

// export default Network;