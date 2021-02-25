
import { useState } from 'react';
import './AddTask.css';


function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const handleClick = () => {
    addTask(text)
    setText("")
  }

  return (
    <div className="add-task__actions">
      <label htmlFor="add-task-input" className="visuallyhidden">Add new to do task</label>
      <input
        value={text}
        // onChange = {handleChange} 
        onChange={(event) => setText(event.target.value)}
        id="add-task-input"
        className="add-task__input-field">
      </input>
      <button onClick={handleClick} className="button">Add</button>
    </div>
  );
}

export default AddTask;
