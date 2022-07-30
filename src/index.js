import css from "styles.css"

const div = document.createElement('div')

div.textContent = 'hello'

const body = document.querySelector('body');

body.appendChild(div);