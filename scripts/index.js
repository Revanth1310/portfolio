
function downloadPDF() {
    // PDF URL
    const pdfUrl = '../static/images/Resume.pdf';  // Replace with your actual PDF file path

    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Set download attribute with file name
    link.download = 'Resume.pdf';  // Rename as needed

    // Append to body and trigger click
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
}
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const starCount = 500;
const centerX = canvas.width * 0.9;  // Start from the right center
const centerY = canvas.height / 2;

// Star Constructor
class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = (Math.random() - 0.5) * canvas.width;  // Spread stars randomly
        this.y = (Math.random() - 0.5) * canvas.height;
        this.z = Math.random() * canvas.width;
        this.speed = 2;  // Adjust speed for smooth animation
    }

    update() {
        this.z -= this.speed;  // Move stars outward
        if (this.z <= 0) {
            this.reset();
        }
        this.draw();
    }

    draw() {
        let x = (this.x / this.z) * centerX + centerX;  // Adjust based on right center
        let y = (this.y / this.z) * centerY + centerY;
        let size = (1 - this.z / canvas.width) * 4;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
}

// Initialize and Animate
function init() {
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
    }
}

function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => star.update());
    
    requestAnimationFrame(animate);
}

// Resize Canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start Animation
init();
animate();


    // Initialize EmailJS with your user ID
    (function () {
        emailjs.init("w2w5HTzwBKCAQYLYv");  // Replace with your EmailJS User ID
    })();

    function sendMail(event) {
        event.preventDefault();  // Prevent form from reloading

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            feedback: document.getElementById("feedback").value,
        };

        const serviceID = "service_keube49";  // Replace with your EmailJS Service ID
        const templateID = "template_ags9mzu";  // Replace with your EmailJS Template ID

        emailjs.send(serviceID, templateID, params)
            .then(function (response) {
                alert("Email Sent Successfully!");  // Success message
                document.querySelector(".feedback-form").reset();  // Reset form after sending
            }, function (error) {
                alert("Failed to Send Email. Please try again!");  // Error message
            });
    }

    // Cursor Tracking
        const cursor = document.getElementById('cursor');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        });

        // Scroll into section with smooth animation
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }

        // Content Visibility on Load
        window.addEventListener('load', () => {
            const sections = document.querySelectorAll('.section-content');
            sections.forEach(section => {
                section.classList.add('visible');
            });
        });


function flipCard(card) {
        // Remove the flipped class from all cards before flipping the clicked one
        document.querySelectorAll(".card").forEach(c => {
            if (c !== card) c.classList.remove("flipped");
        });

        // Toggle the clicked card
        card.classList.toggle("flipped");
    }




    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    
            function openImageModal(src) {
            const modal = document.getElementById("imageModal");
            const modalImg = document.getElementById("modalImage");
            modalImg.src = src;
            modal.style.display = "flex";
        }


        function closeModal() {
            document.getElementById("imageModal").style.display = "none";
        }

        // Optional: Close modal on ESC key
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    
