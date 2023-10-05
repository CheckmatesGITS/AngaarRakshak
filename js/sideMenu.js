let x = window.matchMedia("(max-width: 768px)")

let menuBtn = document.querySelector(`#menuBtn`);
let menu = document.querySelector(`#dashboard .sideMenu`);
let menuList = document.querySelectorAll(`.sideMenu .menu li`);


function myFunction(x) {
    if (x.matches) { // If media query matches

        menuBtn.innerHTML = `<i class="ri-menu-2-fill"></i>`;
        if (menu.offsetWidth != '200px') {
            menuBtn.addEventListener(`click`, ()=>{
                menu.style.cssText = "width: 200px;position: fixed;top: 0;left: 0;bottom: 0;z-index: 2;";
                menuList.style.padding = "5%";
                menuBtn.style.justifyContent = 'flex-end';
                menuBtn.innerHTML = `<i class="ri-close-fill"></i>`;
            });
        }
        else {
            menuBtn.addEventListener(`click`, ()=>{
                menu.style.cssText = "width: 70px;position: sticky;top: 0;left: 0;bottom: 0;z-index: 2;";
                menuBtn.style.padding = "25%";
                menuBtn.innerHTML = `<i class="ri-menu-2-fill"></i>`;
            });    
        }

        
    } 
    else {
    }
  }
  
myFunction(x) // Call listener function at run time
x.addEventListener(`change`,myFunction) // Attach listener function on state changes
