let x = window.matchMedia("(max-width: 768px)")

let menuBtn = document.querySelector(`#menuBtn`);
let closeBtn = document.querySelector(`#closeBtn`);

let menu = document.querySelector(`.sideMenu`);
let menuList = document.querySelectorAll(`.sideMenu .menu li`);



function myFunction(x) {
  if (x.matches) { // If media query matches
    closeBtn.innerHTML = `<i class="ri-close-line"></i>`;
    menuBtn.innerHTML = `<i class="ri-menu-2-fill"></i>`;
    menuList.forEach(element => {
      element.style.padding = `5%`;
    });
    menuBtn.addEventListener(`click`, () => {
      menu.style.cssText = `transform:translateX(0);`;
    })
    
    closeBtn.addEventListener(`click`, () => {
      menu.style.cssText = `transform:translateX(-250px);`;
    })
  }
  else {
    menuBtn.innerHTML = ``;
  }
}

myFunction(x) // Call listener function at run time
x.addEventListener(`change`, myFunction) // Attach listener function on state changes
