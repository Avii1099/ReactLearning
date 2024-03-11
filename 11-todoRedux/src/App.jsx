import ToDoForm from './components/ToDoForm';
import { useSelector } from 'react-redux';
import ToDoItem from './components/ToDoItem';
import { useEffect } from 'react';
function App() {
  const todos = useSelector((state) => state.todo.todos);
  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <ToDoForm />
        </div>
        {todos.map((todo) => (
          <div key={todo.id} className="gap-y-3 mb-3">
            <ToDoItem todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
