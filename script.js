document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // FORM VALIDATION
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
    } else {
      alert("Thanks for contacting us, " + name + "! We'll get back to you shortly.");
      form.reset();
    }
  });

  // SCROLL TO TOP BUTTON
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑ Top";
  scrollBtn.id = "scrollTop";
  document.body.appendChild(scrollBtn);

  // Style the scroll button
  Object.assign(scrollBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    fontSize: "16px",
    display: "none",
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    zIndex: 999
  });

  // Show or hide button based on scroll
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // SCROLL FADE-IN ANIMATION
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});