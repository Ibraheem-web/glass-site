const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const btn = document.querySelector('.btn');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'flex';
}


function close() {
    mainMenu.style.top = '-1000%';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'flex';
}