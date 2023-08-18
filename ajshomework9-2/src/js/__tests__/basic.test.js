import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';

test('Метод должен загружать данные и преобразовывать в строку', () => {
  const arrayBuffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(arrayBuffer);
  const received = converter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toBe(expected);
});
