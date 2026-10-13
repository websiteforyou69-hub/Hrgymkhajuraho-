document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const whatsappButton = document.getElementById("whatsappButton");
  const year = document.getElementById("year");

  // Automatically update footer year
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

    });

    navLinks.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

      });

    });

    document.addEventListener("click", function (event) {

      if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

      }

    });

  }

  /*
    DEMO SETUP:
    Replace the empty number below with the gym's
    verified WhatsApp number, including country code.

    Example format for India: 919876543210
    Do not include +, spaces or hyphens.
  */

  const gymWhatsAppNumber = "";

  if (whatsappButton) {

    whatsappButton.addEventListener("click", function (event) {

      event.preventDefault();

      if (!gymWhatsAppNumber) {

        alert(
          "This is a website demo. The gym's verified WhatsApp number needs to be added before enquiries can be sent."
        );

        return;

      }

      const message =
        "Hello High Rise Fitness Club! I am interested in learning more about your membership options. Please share the details.";

      const whatsappURL =
        "https://wa.me/" +
        gymWhatsAppNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

    });

  }

});
