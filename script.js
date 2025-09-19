const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside the modal content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
