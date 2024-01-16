import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../Redux/action';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = () => {
    dispatch(editTask(task.id, editedDescription));
    setEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggleTask} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;