const form = document.getElementById("lead-form");
const messageEl = document.getElementById("form-message");
const yearEl = document.getElementById("year");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");

if (yearEl) yearEl.textContent = String(new Date().getFullYear());

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mainNav.classList.toggle("is-open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    });
  });
}

if (form && messageEl) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const requiredFields = ["nombre", "email", "empresa", "objetivo"];
    const hasMissingFields = requiredFields.some((field) => {
      const value = data.get(field);
      return !value || !String(value).trim();
    });

    messageEl.classList.remove("error", "success");

    if (hasMissingFields) {
      messageEl.textContent = "Completa los campos obligatorios para continuar.";
      messageEl.classList.add("error");
      return;
    }

    const emailValue = String(data.get("email") || "");
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!isEmailValid) {
      messageEl.textContent = "Revisa el email antes de enviar la solicitud.";
      messageEl.classList.add("error");
      return;
    }

    messageEl.textContent =
      "Solicitud recibida. Te escribo en menos de 48 horas laborables.";
    messageEl.classList.add("success");
    form.reset();
  });
}
