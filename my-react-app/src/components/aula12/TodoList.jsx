
import { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TASK', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
            <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
              {task.completed ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
                