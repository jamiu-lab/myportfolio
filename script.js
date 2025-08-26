/*SCRIPT FOR NAVEMENU*/

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

/*SCRIPT FOR SLIDDING QUOTE*/

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".quote-slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.style.opacity = i === index ? "1" : "0";
    });
    document.querySelector(".quote-carousel").style.transform = `rotateY(-${
      index * 90
    }deg)`;
  }

  function nextQuote() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Automatically change quotes every 5 seconds
  setInterval(nextQuote, 5000);

  // Initial display
  showSlide(currentSlide);
});

/*SCRIPT FOR SCROLLING TEXT*/

/*const text = "I'm jamiu, a digital skilled UI/UX designer with a srong passion for helping e-commerce business owner achieve success.";
      let i = 0;

      function typeWriter() {
        if (i < text.length) {
          document.getElementById("typewriter").innerHTML+= text.charAt(i);
          i++;
          setTimeout(typeWriter, 80) //speed
        }
      }

      typeWriter();*/

/*SCRIPT FOR FAQ ARROW ROTATE*/

function arrowRotate() {
  const arrow = document.getElementById("arrow");

  arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotate");
  });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const arrow = item.querySelector(".arrow");

  question.addEventListener("click", () => {
    answer.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });
});

/*SCRIPT FOR CONTACT FORM*/

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  const form = e.target;
  const formData = new FormData(form);

  fetch(
    "https://script.google.com/macros/s/AKfycbz-KBzI3V09M7yWZUwZ5TogsYPpf0M0A0k5_IWGRNuIJuG3lbbtYTJ2WHPVaeYveZZ6DA/exec" /*Replace with google sheet link*/,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("statusMsg").textContent =
        "✅ Form submitted successfully!";
      form.reset(); // Clear form
    })
    .catch((error) => {
      document.getElementById("statusMsg").textContent = "❌ failed.";
    });
});

window.addEventListener("mousemove", (e) => {
  const light = document.querySelector(".light");
  light.style.setProperty("--x", e.clientX + "px");
  light.style.setProperty("--y", e.clientY + "px");
});
