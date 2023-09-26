let inputName = document.querySelectorAll(`#entry`);
let nameEdit = document.querySelector(`#edit`);

nameEdit.addEventListener(`click`, () => {
   inputName.forEach(element => {
      element.disabled = false;
   });
   nameEdit.style.display = "none";
});