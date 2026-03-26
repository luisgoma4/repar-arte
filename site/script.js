const revealNodes = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  },
);

revealNodes.forEach((node) => revealObserver.observe(node));

const yearNode = document.querySelector("#current-year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
