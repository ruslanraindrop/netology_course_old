function sortingByHealth(arrayOfPlayers) {
  const orderedArray = arrayOfPlayers.sort((a, b) => b.health - a.health);
  return orderedArray;
}

export default sortingByHealth;
