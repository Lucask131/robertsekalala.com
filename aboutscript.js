document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".readmore").forEach(button => {
    button.addEventListener("click", () => {
      const fullText = button.getAttribute("data-fulltext");
      modalText.textContent = fullText;
      modal.style.display = "block";
    });
  });

  
  // Close Read more button modal when clicking CLOSE (X) button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close Read more button modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

