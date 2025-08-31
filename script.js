// 🌟 Event Handling: Mouseover to show hidden message
const hoverMessage = document.getElementById("hoverMessage");
const surprise = document.getElementById("surprise");

hoverMessage.addEventListener("mouseover", () => {
  surprise.classList.remove("hidden");
});
hoverMessage.addEventListener("mouseout", () => {
  surprise.classList.add("hidden");
});

// 🌙 Interactive Feature 1: Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 📚 Interactive Feature 2: FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ✅ Form Validation: Custom logic for name, email, and password
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (!name || !email || !password) {
    feedback.textContent = "All fields are required.";
    feedback.style.color = "red";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Invalid email format.";
    feedback.style.color = "red";
  } else if (!passwordRegex.test(password)) {
    feedback.textContent = "Password must be at least 6 characters and include a number.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
    this.reset();
  }
});