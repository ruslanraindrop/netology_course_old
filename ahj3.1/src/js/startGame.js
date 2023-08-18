import changeImg, { img } from './changeImg';
import Counter from './counter';

export default function startGame() {
  const counter = new Counter(1000);
  img.addEventListener('click', () => counter.onClick());
  counter.onNext(changeImg);
  counter.reset();
  counter.start();
}
