const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const options = document.getElementsByClassName('options');
const applist = document.getElementById('app-list');
const arrowicon = document.getElementById('arrow-icon');

selectField.onclick = function () {
  applist.classList.toggle('hide');
  arrowicon.classList.toggle('rotate');
};
for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    applist.classList.toggle('hide');
    arrowicon.classList.toggle('rotate');
  };
}
