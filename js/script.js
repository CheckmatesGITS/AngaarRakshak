let formBtn = document.querySelector(`#btn`);
let btnContainer = document.querySelector(`.formButton`);
let login = document.querySelector(`#login`);
let signIn = document.querySelector(`#register`);
let form = document.querySelector(`.formSection`);
let regisLink = document.querySelector(`#register1`);

signIn.addEventListener(`click`, function() {
    form.style.transform = `translateX(-50%)`;
    formBtn.style.left = `50%`;
})

regisLink.addEventListener(`click`, function() {
    form.style.transform = `translateX(-50%)`;
    formBtn.style.left = `50%`;
})

login.addEventListener(`click`, function() {
    form.style.transform = `translateX(0)`;
    formBtn.style.left = `0`;
})