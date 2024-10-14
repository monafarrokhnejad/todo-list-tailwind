import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import EditTask from "./components/EditTask";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState({});

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleModal = (value) => {
    setIsOpen(value);
    if (!value) setEditingItem({});
  };
  const handleEdit = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingItem.id
        ? {
            ...task,
            title: editingItem.title,
            description: editingItem.description,
          }
        : task
    );
    setTasks(updatedTasks);
    setIsOpen(false);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (id) => {
    if (!id) return;
    toggleModal(true);
    tasks.find((item) => item.id === id && setEditingItem(item));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <>
      {isOpen && (
        <Modal
          title="ویرایش تسک"
          onClose={() => toggleModal(false)}
          component={
            <EditTask
              editingItem={editingItem}
              setEditingItem={setEditingItem}
              handleEdit={handleEdit}
            />
          }
        />
      )}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-screen-xl flex flex-col w-full min-h-[600px] max-h-[calc(100vh-10rem)] h-[calc(100vh-40rem)] gap-4 md:flex-row md:justify-between md:min-h-[500px] md:h-[calc(100vh-50rem)] md:gap-8">
          <div className="w-full h-[230px] overflow-auto md:h-full">
            <h1 className="text-3xl font-bold text-pink-dark mb-4 text-center">
              لیست تسک ها
            </h1>
            <AddTask addTask={addTask} />
          </div>
          <div className="w-full min-h-[300px] h-[calc(100vh-50rem)] overflow-auto md:h-full">
            <div className="flex items-center justify-start">
              <label className="text-sm font-medium text-gray-900 dark:text-white ml-2">
                فیلتر بر اساس
              </label>
              <select
                onChange={(e) => setFilter(e.target.value)}
                className="mt-4 mb-4 p-2 border border-gray-300 rounded">
                <option value="all">همه</option>
                <option value="completed">انجام‌شده</option>
                <option value="incomplete">در حال انجام</option>
              </select>
            </div>
            <TaskList
              tasks={filteredTasks}
              editTask={editTask}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
