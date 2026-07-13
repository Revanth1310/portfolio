function flipCard(card) {
      document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("flipped");
      });
      card.classList.toggle("flipped");
    }
    // ===================== Star Background Animation =====================
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const starCount = 500;
const centerX = canvas.width * 0.9;
const centerY = canvas.height / 2;

class Star {
    constructor() { this.reset(); }
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
        let x = (this.x / this.z) * centerX + centerX;
        let y = (this.y / this.z) * centerY + centerY;
        let size = (1 - this.z / canvas.width) * 4;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
}
function initStars() {
    for (let i = 0; i < starCount; i++) stars.push(new Star());
}
function animateStars() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => star.update());
    requestAnimationFrame(animateStars);
}
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
initStars();
animateStars();
function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const receiver = "revanthchandika@gmail.com";

    const body = `Hi,

My name is ${name} (${email}).

${message}

Regards,
${name}`;

    const mailto =
        `mailto:${receiver}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const gmailURL =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(receiver)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    // Try to open the default mail app
    window.location.href = mailto;

    // Fallback to Gmail after 1 second
    setTimeout(() => {
        window.open(gmailURL, "_blank");
    }, 1000);

    event.target.reset();
}