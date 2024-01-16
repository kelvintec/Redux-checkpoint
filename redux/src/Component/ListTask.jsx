import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'all') return state.tasks;
    if (state.filter === 'done') return state.tasks.filter((task) => task.isDone);
    return state.tasks.filter((task) => !task.isDone);
  });

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ListTask;