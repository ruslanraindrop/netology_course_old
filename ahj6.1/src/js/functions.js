/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
export function moveAt(element, deltas) {
  element.style.left = `${event.clientX - deltas.x}px`;
  element.style.top = `${event.clientY - deltas.y}px`;
}

export function getPosition(event, target) {
  const targetRect = target.getBoundingClientRect();

  if (event.clientY <= targetRect.top + targetRect.height / 2) {
    return true;
  }
  return false;
}
