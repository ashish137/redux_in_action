import React from 'react';
const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']; 

const Task = props => {

  const onStatusChange = e => {
    e.preventDefault();
    props.onStatusChange(props.task.id,
    e.target.value);
  }

  return (
    <div className="task">
      <div className="task-header">
        <div className="wrapper">
          <div className="task-title">{props.task.title}</div>
          <div className="task-status">
            <select name="status-dd" onChange={onStatusChange}>
              <option value="Unstarted">Unstarted</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="task-body">{props.task.description}</div>
    </div>
  );
   }

export default Task;