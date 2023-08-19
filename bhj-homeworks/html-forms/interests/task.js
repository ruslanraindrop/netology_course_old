const interestCheck = Array.from(document.querySelectorAll('.interest__check')); 

interestCheck.forEach((element) => {
  const closestList = element.closest('.interest');
  const parentList = Array.from(closestList.querySelectorAll('.interest__check'));

  function changeParent() { 
    if (closestList.querySelector('.interests')) {
      if (element.checked) {
        parentList.forEach((element) => element.checked = true);
      } else {
        parentList.forEach((element) => element.checked = false);
      }
    }
  }

  element.addEventListener('change', changeParent);
})