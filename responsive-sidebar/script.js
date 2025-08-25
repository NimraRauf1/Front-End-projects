const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");

  // Change icon between arrows
  if (sidebar.classList.contains("open")) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Close sidebar when clicking overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
  toggleBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
});

// Close sidebar on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    toggleBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
  }
});
