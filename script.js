// slide
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const images = [
    "/images/merbabu.jpg",
    "/images/prau.jpg",
    "/images/andong.jpg",
    "/images/sindoro.jpg",
  ];

  function changeBackground() {
    currentSlide = (currentSlide + 1) % images.length;
    document.querySelector(
      ".hero"
    ).style.backgroundImage = `url(${images[currentSlide]})`;
  }

  setInterval(changeBackground, 5000);

  // Hamburger menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.createElement("div");

  // Tambahkan elemen overlay ke dalam body
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });
  const toggleButton = document.getElementById("theme-toggle");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

// Validasi Form Kontak (kontak.html)
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Semua bidang harus diisi!");
    return false;
  }
  alert("Formulir berhasil dikirim!");
  return true;
}
