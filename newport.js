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
