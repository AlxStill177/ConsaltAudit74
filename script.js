const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const copyButton = document.querySelector(".copy-card");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    const status = copyButton.querySelector("[data-copy-status]");

    if (!email || !status) {
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      status.textContent = "email скопирован";
    } catch {
      status.textContent = email;
    }

    window.setTimeout(() => {
      status.textContent = "для отправки из своей почты";
    }, 2500);
  });
}
