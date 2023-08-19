const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const intViewportHeight = window.innerHeight;

for (let i = 0; i < hasTooltip.length; i++) {
  hasTooltip[i].insertAdjacentHTML('afterEnd', `<div class="tooltip">${hasTooltip[i].title}</div>`);
  const tooltips = Array.from(document.querySelectorAll('.tooltip'));

  function tooltipActive() {
    event.preventDefault();

    if (tooltips[i].classList.contains('tooltip_active')) {
      tooltips[i].classList.remove('tooltip_active');
    } else {
      tooltipRemove();
      const elementLeft = hasTooltip[i].getBoundingClientRect().left;
      const elementBottom = hasTooltip[i].getBoundingClientRect().bottom;
      tooltips[i].style = `left: ${elementLeft}px; top: ${elementBottom}px`;
      tooltips[i].classList.add('tooltip_active')
    }
  }

  function tooltipRemove() {
    if (tooltips[i].closest('body').querySelector('.tooltip_active')) {
      tooltips[i].closest('body').querySelector('.tooltip_active').classList.remove('tooltip_active');
    }
  }

  hasTooltip[i].addEventListener('click', tooltipActive);
  document.addEventListener('scroll', tooltipRemove);
}