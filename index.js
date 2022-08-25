function addAnimationIntersectionObserver(topAnim, bottomAnim) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !(
          entry.target.classList.contains(topAnim) ||
          entry.target.classList.contains(bottomAnim)
        )
      ) {
        const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
        if (isAbove) {
          entry.target.classList.add(topAnim);
        } else {
          entry.target.classList.add(bottomAnim);
        }
      }
    });
  });
  document
    .querySelectorAll(
      ".content-info-container, .content-contact-container, .assets_wrapper"
    )
    .forEach((container) => observer.observe(container));
}

addAnimationIntersectionObserver("fadeInTop", "fadeInBottom");
