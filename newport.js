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


// Handle form submission
  document.getElementById("submit-feedback").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const feedback = document.getElementById("feedback").value;

    // Save feedback to localStorage
    const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
    feedbackData.push({ name, feedback });
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));

    alert("Feedback submitted successfully!");
    window.location.href = "index.html"; 
  });
