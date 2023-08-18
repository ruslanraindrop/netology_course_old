export default function getSpecial(character) {
  const copy = { ...character };
  const { special } = copy;
  const result = [];
  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    result.push({
      id, name, icon, description,
    });
  }
  // eslint-disable-next-line no-console
  console.log(result);
  return result;
}
