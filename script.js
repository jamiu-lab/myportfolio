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

  // SAVE TO GOOGLE SHEET
  fetch(
    "https://script.google.com/macros/s/AKfycbz-KBzI3V09M7yWZUwZ5TogsYPpf0M0A0k5_IWGRNuIJuG3lbbtYTJ2WHPVaeYveZZ6DA/exec" /*Replace with google sheet link*/,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("statusMsg").textContent = "";
      form.reset(); // Clear form
    })
    .catch((error) => {
      document.getElementById("statusMsg").textContent = "";
    });

  // SCRIPT FOR EMAILJS
  (function () {
    emailjs.init("IVCEvi1ga6bpQ7ZL2"); // replace with your public key
  })();

  // SEND VIA EMAILJS
  emailjs.sendForm("service_qan1lfl", "template_gft3otk", this).then(
    () => {
      document.getElementById("statusMsg").textContent =
        "✅ Message sent & saved!";
      form.reset();
    },
    (error) => {
      document.getElementById("statusMsg").textContent =
        "❌ Email sending failed!";
      console.error(error);
    }
  );
});

const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 6000) {
    backToTop.style.display = "flex";
    backToTop.style.justifyContent = "center";
    backToTop.style.alignItems = "center";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll back to top smoothly
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
