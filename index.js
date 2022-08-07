function addAnimationIntersectionObserver(animationClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    });
    document.querySelectorAll(".content-info-container").forEach(container => observer.observe(container));
}

addAnimationIntersectionObserver("fadeInBottom");