document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const endangeredLanguage = createEndangeredLanguage(event.target);
  const endangeredLanguages = document.querySelector('#endangered-languages');
  endangeredLanguages.appendChild(endangeredLanguage);

  event.target.reset();
}

const createEndangeredLanguage = function (form) {
  const endangeredLanguage = document.createElement('li')
  endangeredLanguage.classList.add('#endangered-language')

const classification = document.createElement('h2');
classification.textContent = form.classification.value;
endangeredLanguage.appendChild(classification);

const regionsSpoken = document.createElement('h3');
regionsSpoken.textContent = form.regionsSpoken.value;
endangeredLanguage.appendChild(regionsSpoken);

const numberOfSpeakers = document.createElement('p');
numberOfSpeakers.textContent = form.numberOfSpeakers.value;
endangeredLanguage.appendChild(numberOfSpeakers);

const threatStatus = document.createElement('p');
threatStatus.textContent = form.threatStatus.value;
endangeredLanguage.appendChild(threatStatus);

return endangeredLanguage;

}

const handleDeleteAllClick = function (event) {
  const endangeredLanguages = document.querySelector('#endangered-languages');
  endangeredLanguages.innerHTML = '';
}
