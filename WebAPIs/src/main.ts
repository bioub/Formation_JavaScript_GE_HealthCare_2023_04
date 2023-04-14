import { Todo, createTodo } from "./todo.js";

const formEl = document.querySelector('.todos-form') as HTMLFormElement;
const listEl = document.querySelector('.todos-list') as HTMLDivElement;
const inputEl = document.querySelector('.todos-new-value') as HTMLInputElement;
const toggleEl = document.querySelector('.todos-toggle-checkbox') as HTMLInputElement;

formEl.addEventListener('submit', async (event) => {
  event.preventDefault(); // désactive le form

  const res = await fetch('http://localhost:4000/api/todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: inputEl.value,
      completed: false,
    })
  })

  const todoFromNodeJS = await res.json();

  const divEl = createTodo(todoFromNodeJS);

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

// inputEl.addEventListener('beforeinput', (event) => {
//   if (!event.data?.match(/^[a-z]+$/i)) {
//     event.preventDefault();
//   }
// });

// Reprendre l'exercice 2
// Mais écouter le click de listEl (qui existe au chargement)
// et grace à la phase de target vérifier si on a click sur le
// bouton moins (vous pouvez ajouter une classe sur le bouton si c'est plus simple)
// et supprimer la balise divEl (dont vous n'aurez plus la référence
// plus de closure)
listEl.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('todos-delete')) {
    target.closest('.todos-item')?.remove();
  }
});

const res = await fetch('http://localhost:4000/api/todos');
const todos: Todo[] = await res.json()

for (const todo of todos) {
  const divEl = createTodo(todo);

  listEl.append(divEl);
}
