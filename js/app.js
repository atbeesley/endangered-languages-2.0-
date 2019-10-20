document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const languageName = createLanguageName(event.target);
  const endangeredLanguages = document.querySelector('#language-name');
  endangeredLanguages.appendChild(languageName);

  event.target.reset();
}

const createLanguageName = function (form) {
  const languageName = document.createElement('li')
  languageName.classList.add('#language-name')

const classification = document.createElement('h2');
classification.textContent = form.classification.value;
languageName.appendChild(classification);

const regionsSpoken = document.createElement('h3');
regionsSpoken.textContent = form.regionsSpoken.value;
languageName.appendChild(regionsSpoken);

const numberOfSpeakers = document.createElement('p');
numberOfSpeakers.textContent = form.numberOfSpeakers.value;
languageName.appendChild(numberOfSpeakers);

const threatStatus = document.createElement('p');
threatStatus.textContent = form.threatStatus.value;
languageName.appendChild(threatStatus);

return languageName;

}

const handleDeleteAllClick = function (event) {
  const endangeredLanguages = document.querySelector('#endangered-languages');
  endangeredLanguages.innerHTML = '';
}
