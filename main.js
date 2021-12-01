import Network from "./Network.js";
import Particle from "./Particle.js";

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight;

const network = new Network(canvas);
network.init();

window.addEventListener('click', (event) => {
    const particle = new Particle(canvas);
    particle.x = event.clientX;
    particle.y = event.clientY;
    network.particles.push(particle);
})
