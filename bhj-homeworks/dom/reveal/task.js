const reveal = Array.from(document.querySelectorAll('.reveal'));
const intViewportHeight = window.innerHeight;

function isInViewport(element) {
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  return (intViewportHeight > elementTop) && (elementBottom > 0);
}

function revealActive() {
  reveal.forEach(function (element) {
    if (isInViewport(element)) {
        const addActive = () => element.classList.add('reveal_active');
        setTimeout(addActive, 200);
    } else {
        element.classList.remove('reveal_active');
    }
  });
}

document.addEventListener('scroll', revealActive);