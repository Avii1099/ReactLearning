import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeToDo,
  updateToDo,
  toggleCompleted,
} from '../features/toDoSlice.js';
import PropTypes from 'prop-types';
function ToDoItem({ todo }) {
  const dispatch = useDispatch();
  const [todoMsg, setTodoMsg] = React.useState(todo.text_message);
  const [isTodoEditable, setIsTodoEditable] = React.useState(false);
  const toToggleComplete = () => dispatch(toggleCompleted(todo.id));
  const toUpdateToDo = (id, text_message) => {
    dispatch(updateToDo({ id: id, text_message: text_message }));
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toToggleComplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <input
        type="text"
        className="border outline-none w-full bg-transparent rounded-lg border-transparent text-right text-gray-400"
        value={todo.createdDate}
        readOnly
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            toUpdateToDo(todo.id, todoMsg);
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeToDo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default ToDoItem;
