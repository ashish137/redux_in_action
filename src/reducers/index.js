import { uniqueId } from "../actions";

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
];

export default function tasks(state = { tasks: mockTasks }, action) {   
  if (action.type === 'CREATE_TASK') {
    console.log('action payload', action.payload);
    const newState = [...mockTasks, action.payload];
    return {tasks: newState};
  }

  if (action.type === 'EDIT_TASK') {
    const {payload} = action;
    const newState = state.tasks.map( task => {
      if (task.id === action.payload.id) {
        return Object.assign({}, task, payload.params);
      }
  
      return task;
    });

    return {tasks: newState};

  }
  
  return state;
}