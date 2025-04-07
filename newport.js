// JavaScript for Rotating Testimonials
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function rotateTestimonials() {
  // Hide all testimonials
  testimonials.forEach((testimonial) => {
    testimonial.style.display = 'none';
  });
  // Show the current testimonial
  testimonials[currentIndex].style.display = 'block';
  // Move to the next testimonial
  currentIndex = (currentIndex + 1) % testimonials.length;
}

// Initialize and rotate every 5 seconds
rotateTestimonials();
setInterval(rotateTestimonials, 5000);


const feedbackForm = document.getElementById("feedback-form");
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get user input values
    const name = document.getElementById("name").value;
    const feedback = document.getElementById("feedback").value;

    // Save feedback to localStorage
    const feedbackArray = JSON.parse(localStorage.getItem("feedbackData")) || [];
    feedbackArray.push({ name, feedback });
    localStorage.setItem("feedbackData", JSON.stringify(feedbackArray));

    // Redirect back to the homepage
    window.location.href = "index.html";
  });

  // Load feedback from localStorage and display it
  const feedbackContainer = document.getElementById("feedback-container");
  const savedFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];

  savedFeedback.forEach((entry) => {
    const testimonial = document.createElement("div");
    testimonial.classList.add("testimonial");
    testimonial.innerHTML = `
      <blockquote>
        <p>"${entry.feedback}"</p>
      </blockquote>
      <div class="client-info">
        <h3>${entry.name}</h3>
      </div>
    `;
    feedbackContainer.appendChild(testimonial);
  });

