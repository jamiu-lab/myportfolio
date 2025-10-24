/*SCRIPT FOR NAVEMENU*/

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("open");
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

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const arrow = item.querySelector(".arrow");

  question.addEventListener("click", () => {
    // Close all other FAQ items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector(".faq-answer").classList.remove("open");
        otherItem.querySelector(".arrow").classList.remove("open");
      }
    });

    // Toggle the current item
    answer.classList.toggle("open");
    arrow.classList.toggle("open");
  });
});

/*SCRIPT FOR CONTACT FORM*/
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  const form = e.target;
  const formData = new FormData(form);
  const statusMsg = document.getElementById("statusMsg");

  // Basic form validation
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    statusMsg.textContent = "❌ Please fill in all required fields.";
    statusMsg.style.color = "red";
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    statusMsg.textContent = "❌ Please enter a valid email address.";
    statusMsg.style.color = "red";
    return;
  }

  statusMsg.textContent = "⏳ Sending message...";
  statusMsg.style.color = "gold";

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
      statusMsg.textContent = "✅ Message sent & saved!";
      statusMsg.style.color = "green";
      form.reset(); // Clear form
    })
    .catch((error) => {
      statusMsg.textContent = "❌ Failed to save to sheet.";
      statusMsg.style.color = "red";
      console.error(error);
    });

  // SCRIPT FOR EMAILJS
  (function () {
    emailjs.init("IVCEvi1ga6bpQ7ZL2"); // replace with your public key
  })();

  // SEND VIA EMAILJS
  emailjs.sendForm("service_qan1lfl", "template_gft3otk", this).then(
    () => {
      statusMsg.textContent = "✅ Message sent & saved!";
      statusMsg.style.color = "green";
      form.reset();
    },
    (error) => {
      statusMsg.textContent = "❌ Email sending failed!";
      statusMsg.style.color = "red";
      console.error(error);
    }
  );
});

const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Scroll back to top smoothly
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
