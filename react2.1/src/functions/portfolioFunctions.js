export function getFilters(projects) {
  const allCategories = projects.map((item) => item.category);
  const filters = ['All'].concat(Array.from(new Set(allCategories)));

  return filters;
}

export function getColumns(projects, columns = 3) {
  const listByColumns = [];
  const [...copy] = projects;  

  for(let i = columns; i > 0; i--) {
    const amount = copy.length / i;
    const slicer = copy.length % i ? Math.floor(amount) + 1 : amount;        
    listByColumns.push(copy.splice(0, slicer));
  }
  
  return listByColumns;
}