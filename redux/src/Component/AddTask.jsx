import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from "../Redux/action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), description, isDone: false }));
    setDescription('');
  };

  return (
    <div>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;