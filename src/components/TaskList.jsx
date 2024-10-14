import TaskItem from "./TaskItem";

const TaskList = ({ tasks, editTask, deleteTask, toggleComplete }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">هیچ وظیفه‌ای وجود ندارد.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
