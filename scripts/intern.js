function toggleTasks(internshipElement) {
    const taskDiv = internshipElement.querySelector('.tasks');
    internshipElement.classList.toggle('active');
    
    if (internshipElement.classList.contains('active')) {
      taskDiv.style.display = 'block';
      setTimeout(() => {
        taskDiv.style.maxHeight = taskDiv.scrollHeight + "px";
      }, 10);
    } else {
      taskDiv.style.maxHeight = "0";
      setTimeout(() => {
        taskDiv.style.display = 'none';
      }, 500); // Match transition duration
    }
  }

  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const centerX = canvas.width * 0.9;
  const centerY = canvas.height / 2;
  const stars = [];
  const starCount = 200;

  class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = (Math.random() - 0.5) * canvas.width;
        this.y = (Math.random() - 0.5) * canvas.height;
        this.z = Math.random() * canvas.width;
        this.speed = 2;
    }

    update() {
        this.z -= this.speed;
        if (this.z <= 0) {
            this.reset();
        }
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

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

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
