function getValuesByUnit(object) {
  const { special: result } = object;
  for (let index = 0; index < result.length; index += 1) {
    const element = result[index];
    if ('description' in element === false) {
      element.description = 'Описание недоступно';
    }
    const elementCopy = {
      id: element.id, name: element.name, description: element.description, icon: element.icon,
    };
    result.splice(index, 1, elementCopy);
  }
  return result;
}

export default getValuesByUnit;
