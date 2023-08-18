import ErrorRepository from './ErrorRepository';

const errorStorage = new ErrorRepository();
errorStorage.map.set(111, 'Такой игрок уже создан');
errorStorage.map.set(222, 'Нельзя добавить в команду больше 5 персонажей');
errorStorage.map.set(333, 'Время ожидания истекло');
errorStorage.map.set(444, 'Отсутствует подключение к интернету');

// eslint-disable-next-line no-console
console.log(errorStorage);
// eslint-disable-next-line no-console
console.log(errorStorage.translate(222));

export default errorStorage;
