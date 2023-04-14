import express from 'express';
import cors from 'cors';

const todos = [
  {
    id: 1,
    title: 'Acheter du pain',
    completed: false,
  },
  {
    id: 2,
    title: 'Introduire Express',
    completed: true,
  }
];

function nextId() {
  return (todos.at(-1)?.id ?? 0) + 1;
}

const app = express();

app.use(cors());

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// express.json par le body de la requête si l'entête Content-type: application/json
app.post('/api/todos', express.json(), (req, res) => {
  const todo = { id: nextId(), ...req.body}
  todos.push(todo);

  res.status(201).json(todo);
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});
