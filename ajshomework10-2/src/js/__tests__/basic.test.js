import GameSavingLoader from '../GameSavingLoader';

test('Должен вернуть строку json', async () => {
  const expected = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  const received = await GameSavingLoader.load();
  expect(received).toEqual(expected);
});

test('Должен вернуть ошибку', async () => {
  const received = Promise.reject(new Error('error'));
  await expect(received).rejects.toThrow('error');
});
