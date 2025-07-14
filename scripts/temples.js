document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const nav = document.querySelector("header nav");
  const currentYearSpan = document.querySelector("#currentyear");
  const lastModifiedParagraph = document.querySelector("#lastModified");


  menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (menuButton.textContent === "☰") {
      menuButton.textContent = "✖";
    } else {
      menuButton.textContent = "☰";
    }
  });

  const today = new Date();
  if (currentYearSpan) {
    currentYearSpan.textContent = today.getFullYear();
  }

  if (lastModifiedParagraph) {
    const modified = new Date(document.lastModified);
    const formatted = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "medium"
    }).format(modified);

    lastModifiedParagraph.innerHTML = `Last Modified: <span class="highlight">${formatted}</span>`;
  }
});
