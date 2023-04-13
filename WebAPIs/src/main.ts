import { createTodo } from "./todo.js";

const formEl = document.querySelector('.todos-form') as HTMLFormElement;
const listEl = document.querySelector('.todos-list') as HTMLDivElement;
const inputEl = document.querySelector('.todos-new-value') as HTMLInputElement;
const toggleEl = document.querySelector('.todos-toggle-checkbox') as HTMLInputElement;

formEl.addEventListener('submit', (event) => {
  event.preventDefault(); // désactive le form

  const divEl = createTodo({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.append(divEl);
});

/*
Exercice 3
Au clic de la checkbox du formulaire
Cocher ou décocher toutes les checkboxes de .todos-list
*/
toggleEl.addEventListener('click', () => {
  const checkboxes = listEl.querySelectorAll<HTMLInputElement>('input[type=checkbox]');

  for (const checkbox of checkboxes) {
    checkbox.checked = toggleEl.checked;
  }
});

inputEl.addEventListener('beforeinput', (event) => {
  if (!event.data?.match(/^[a-z]+$/i)) {
    event.preventDefault();
  }
});
