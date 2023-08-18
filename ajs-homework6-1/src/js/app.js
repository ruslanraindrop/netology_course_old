function orderByProps(obj, arr) {
  const object = { ...obj };
  const result = [];

  for (const prop of arr) {
    result.push({ key: prop, value: object[prop] });
    delete object[prop];
  }

  const otherKeys = Object.keys(object).sort();

  for (const prop of otherKeys) {
    result.push({ key: prop, value: object[prop] });
  }

  return result;
}

export default orderByProps;
