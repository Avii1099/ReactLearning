import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import { ToDoProvider } from './context';
import TodoItem from './components/TodoItem';

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const addToDo = (todo) => {
    let date = new Date();
    let todayDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    setTodoArray((prev) => [...prev, { id: Date.now(), addDate: todayDate, ...todo }]);
  };
  const updatedToDo = (id, todo) => {
    setTodoArray((prev) => prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo)));
  };
  const deleteTodo = (id) => {
    setTodoArray((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodoArray((prev) =>
      prev.map((prevToDo) => (prevToDo.id === id ? { ...prevToDo, completed: !prevToDo.completed } : prevToDo))
    );
  };

  useEffect(() => {
    const toDos = JSON.parse(localStorage.getItem('todoArray'));
    if (toDos && toDos.length > 0) {
      setTodoArray(toDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <ToDoProvider value={{ todoArray, addToDo, updatedToDo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          {todoArray.map((todo) => (
            <div key={todo.id} className="gap-y-3 mb-3">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
