const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

for (let i = 0; i < dropdownValue.length; i++) {
  function activeList() {
    dropdownValue[i].closest('.dropdown').querySelector('.dropdown__list').classList.add('dropdown__list_active');
  }
  
  dropdownValue[i].addEventListener('click', activeList);

  for (let j = 0; j < dropdownItem.length; j++) {
    function changeValue() {
    dropdownItem[j].closest('.dropdown').querySelector('.dropdown__value').textContent = dropdownItem[j].querySelector('.dropdown__link').textContent;
    dropdownItem[j].closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    event.preventDefault();
    }

    dropdownItem[j].querySelector('.dropdown__link').addEventListener('click', changeValue);
  } 
}