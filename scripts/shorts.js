import { Header, Menu, CustomStyle } from './template.js';

const app = document.querySelector("body");
app.classList.add('bg-gray-100');

const menu = Menu();
const header = Header(menu);

app.prepend(menu);
app.prepend(header);