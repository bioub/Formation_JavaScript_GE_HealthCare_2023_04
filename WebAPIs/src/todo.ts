type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

export function createTodo(todo: Todo): HTMLDivElement {
  // <div class="todos-item" data-todo-id="32">
  //     <input type="checkbox">
  //     <span>ABC</span>
  //     <button>-</button>
  //   </div>
  const divEl = document.createElement('div');
  divEl.className = "todos-item";
  divEl.dataset.todoId = String(todo.id);

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = todo.completed;

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;

  const buttonEl = document.createElement('button');
  buttonEl.innerText = '-';

  divEl.append(checkboxEl, spanEl, buttonEl);

  /*
  Exercice 1
  Compléter ce code de façon à créer le HTML suivant
  <div class="todos-item" data-todo-id="32">
    <input type="checkbox">
    <span>ABC</span>
    <button>-</button>
  </div>
  Il faut que la checkbox soit cochée si todo.completed === true
  */

  /*
  Exercice 2
  Au clic du bouton moins, supprimer la div parent
  */
  // buttonEl.addEventListener('click', () => {
  //   divEl.remove();
  // });

  return divEl;
}
