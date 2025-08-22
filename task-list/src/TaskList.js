import React from "react";
import "./TaskList.css";

class TaskList extends React.Component {

  static tasks = [
    { id: 1, text: "Play a good football game" },
    { id: 2, text: "Complete homework!" },
  ];

  forceUpdateList = () => {
    this.forceUpdate();
  };

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdateList();
  };


  addTask = () => {
    const newTask = {
      id: Date.now(),
      text: `New Task ${TaskList.tasks.length + 1}`,
    };
    TaskList.tasks.push(newTask);
    this.forceUpdateList();
  };

  render() {
    return (
      <div className="task-list">
        <h2>Task List</h2>
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {TaskList.tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => this.deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;