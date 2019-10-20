document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const endangeredLanguageItem = createEndangeredLanguageItem(event.target);
  const endangeredLanguageList = document.querySelector('#endangered-languages-list');
  endangeredLanguageList.appendChild(endangeredLanguageItem);

  event.target.reset();
}

const createEndangeredLanguageItem = function (form) {
  const endangeredLanguageItem = document.createElement('li')
  endangeredLanguageItem.classList.add('endangered-language-item')

const classification = document.createElement('h2');
classification.textContent = form.classification.value;
  endangeredLanguageItem.appendChild(classification);

const regionsSpoken = document.createElement('h3');
regionsSpoken.textContent = form.regionsSpoken.value;
  endangeredLanguageItem.appendChild(regionsSpoken);

const numberOfSpeakers = document.createElement('p');
numberOfSpeakers.textContent = form.numberOfSpeakers.value;
  endangeredLanguageItem.appendChild(numberOfSpeakers);

const threatStatus = document.createElement('p');
threatStatus.textContent = form.threatStatus.value;
endangeredLanguageItem.appendChild(threatStatus);

return endangeredLanguageItem;

}

const handleDeleteAllClick = function (event) {
  const endangeredLanguageList = document.querySelector('#endangered-languages-list');
  endangeredLanguagesList.innerHTML = '';
}
