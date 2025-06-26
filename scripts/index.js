// ===================== PDF Download =====================
function downloadPDF() {
    const pdfUrl = '../static/images/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume.pdf';
    link.target='_blank'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

// ===================== EmailJS Feedback =====================
(function () {
    emailjs.init("w2w5HTzwBKCAQYLYv");
})();
function sendMail(event) {
    event.preventDefault();
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        feedback: document.getElementById("feedback").value,
    };
    emailjs.send("service_keube49", "template_ags9mzu", params)
        .then(() => {
            alert("Email Sent Successfully!");
            document.querySelector(".feedback-form").reset();
        })
        .catch(() => {
            alert("Failed to Send Email. Please try again!");
        });
}

// ===================== Cursor Tracker =====================
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// ===================== Section Scroll =====================
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ===================== Content Visibility on Load =====================
window.addEventListener('load', () => {
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.add('visible');
    });
});

// ===================== Image Modal =====================
function openImageModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modalImg.src = src;
    modal.style.display = "flex";
}
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
});

// ===================== Flip Card =====================
function flipCard(card) {
    document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("flipped");
    });
    card.classList.toggle("flipped");
}
