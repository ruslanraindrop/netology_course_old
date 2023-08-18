import Collapse from './collapse';

const container = document.createElement('div');
container.classList.add('widget-collapse');
document.body.insertAdjacentElement('beforeEnd', container);

const collapse = new Collapse(container);
collapse.init();
