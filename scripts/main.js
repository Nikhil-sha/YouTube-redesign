import { Header, Menu, BottomNav, CustomStyle } from './template.js';

const app = document.querySelector("body");
app.classList.add('bg-gray-100');

// Create Menu
const menu = Menu();
// Create Header and pass the menu as an argument to the Header function
const header = Header(menu);
// Create Bottom Nav
const bottomNav = BottomNav();

// Prepend the Header and append the Menu to the body (via app)
app.prepend(menu);
app.prepend(header);
app.appendChild(bottomNav);