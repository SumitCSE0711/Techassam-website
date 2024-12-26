// JavaScript: Main Features

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});

// Form Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Send data to the backend
    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        contactForm.reset();
    })
    .catch(error => {
        console.error("Error submitting the form:", error);
        alert("There was an error submitting your form. Please try again later.");
    });
});
