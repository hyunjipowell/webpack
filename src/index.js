import {hello, add} from './util';
import "./style.css"
import "./header.css"
import logo from "./images/지구.png"

const text = hello("<h1>this is mainjs</h1>");
const num = add(1, 2);
const img = `<img src="${logo}">`;

document.getElementById("root").innerHTML = img+ text + num;
