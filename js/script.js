window.onload = function () {
  // Menghapus hash dari URL
  if (window.location.hash) {
    history.replaceState("", document.title, window.location.pathname);
  }

  // Scroll ke bagian paling atas halaman
  window.scrollTo(0, 0);
};

// Home
let slideIndex = 0;
const slides = document.getElementsByClassName("img-slide");
const totalSlides = slides.length;

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.add("inactive");
    slides[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
  slides[slideIndex].classList.remove("inactive");

  slideIndex++;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  setTimeout(showSlides, 5000);
}

// Mulai slideshow
showSlides();

// Pop up name
document.addEventListener("DOMContentLoaded", function () {
  const namePopup = document.getElementById("namePopup");
  const typedName = document.getElementById("typedName");
  const nameInput = document.getElementById("nameInput");
  const submitNameButton = document.getElementById("submitName");

  namePopup.style.visibility = "visible";

  submitNameButton.addEventListener("click", function () {
    const name = nameInput.value.trim();
    if (name) {
      // Update the name in the header
      typedName.textContent = name;
      // Hide the popup
      namePopup.style.visibility = "hidden";
    } else {
      alert("Please enter your name.");
    }
  });
});

// explore
function scrollToProfile() {
  document.querySelector("#profile").scrollIntoView({ behavior: "smooth" });
}

// Testimonial Slider
let currentTestimonialIndex = 0;

function showTestimonialSlides() {
  const testimonialSlides =
    document.getElementsByClassName("testimonial-slide");
  for (let i = 0; i < testimonialSlides.length; i++) {
    testimonialSlides[i].style.display = "none";
  }
  currentTestimonialIndex++;
  if (currentTestimonialIndex > testimonialSlides.length) {
    currentTestimonialIndex = 1;
  }
  testimonialSlides[currentTestimonialIndex - 1].style.display = "block";
  setTimeout(showTestimonialSlides, 5000);
}

// Mulai testimonial slider
showTestimonialSlides();

// message
function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["tgl-lahir"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);

  return false;
}

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}

// profile
function showSlide(slideId) {
  // Hide all slides
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Show the selected slide by adding 'active' class
  const selectedSlide = document.getElementById(slideId);
  selectedSlide.classList.add("active");
}
