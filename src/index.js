import pageLoad from './pageLoad'
import menuLoad from './menuLoad'
import contactPage from './contactPage'

let pageHead = document.getElementById('header');
let navbar = document.createElement('nav');
let home = document.createElement('li');
let menu = document.createElement('li');
let contacts = document.createElement('li');

home.innerText = 'Home';
menu.innerText = 'Menu';
contacts.innerText = 'Contact Us';

pageHead.append(navbar);
navbar.append(home);
navbar.append(menu);
navbar.append(contacts);
pageLoad();

home.addEventListener('click', e => {
  let contentDiv = document.getElementById('content');
  contentDiv.remove();
  pageLoad();
})

menu.addEventListener('click', e => {
  let contentDiv = document.getElementById('content');
  contentDiv.remove();
  menuLoad();
})

contacts.addEventListener('click', e => {
  let contentDiv = document.getElementById('content');
  contentDiv.remove();
  contactPage();
})