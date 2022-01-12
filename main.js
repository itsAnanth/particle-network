const loader = document.getElementById('loader_div');
setTimeout(() => loader.classList.add('opacity-0'), 2000);
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


