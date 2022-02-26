import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { FilterTask } from "./components/FilterTask";
import ListTask from "./components/ListTask";
import { TaskModel } from "./model/task";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (title) => {
    setTasks([new TaskModel(tasks.length + 1, title), ...tasks]);
  };

  const deleteTaskById = (selectedId) => {
    setTasks([...tasks.filter((t) => t.id !== selectedId)]);
  };

  return (
    <>
      <AddTask onAddTask={addNewTask} />
      <hr />
      <h1 className="text-center">List Task</h1>
      <FilterTask />
      <ListTask listTask={tasks} onDeleteTask={deleteTaskById} />
    </>
  );
};

export default App;
