const button = document.getElementById('button');
const toggle = document.getElementById('toggle');

function popoverVisible(e) {
  if (document.getElementById('popover_title')) {
    const title = document.getElementById('popover_title');
    const text = document.getElementById('popover_text');
    title.remove();
    text.remove();
    toggle.classList.remove('popover');
  } else {
    e.preventDefault();
    const title = document.createElement('h3');
    const text = document.createElement('p');
    title.id = 'popover_title';
    text.id = 'popover_text';
    title.className = 'popover_title';
    text.className = 'popover_text';
    title.textContent = 'Popover title';
    text.textContent = "And here's some amazing content. It's very engaging. Right?";
    toggle.insertAdjacentElement('afterbegin', text);
    toggle.insertAdjacentElement('afterbegin', title);
    toggle.className = 'popover';
  }
}

button.addEventListener('click', popoverVisible);
