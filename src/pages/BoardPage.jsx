import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import BoardColumn from '../components/BoardColumn.jsx';
import TaskForm from '../components/TaskForm.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { useBoard } from '../context/BoardContext.jsx';

export default function BoardPage() {
  const { board, sortedColumns, addTask, updateTask, deleteTask } = useBoard();
  const [taskForm, setTaskForm] = useState(null); // null | { task? }
  const [taskToDelete, setTaskToDelete] = useState(null);

  function handleSubmit(values) {
    if (taskForm?.task) updateTask(taskForm.task.id, values);
    else addTask(values);
    setTaskForm(null);
  }

  return (
    <div className="app">
      <Navbar />
      <main className="board-page">
        <header className="board-header">
          <div className="board-header__text">
            <h1>{board.title}</h1>
            <p>{board.description}</p>
          </div>
          <button type="button" className="button button--primary" onClick={() => setTaskForm({})}>
            + New task
          </button>
        </header>
        <div className="board-columns">
          {sortedColumns.map(column => (
            <BoardColumn
              key={column.id}
              title={column.title}
              tasks={board.tasks.filter(task => task.status === column.id)}
              onEdit={task => setTaskForm({ task })}
              onDelete={setTaskToDelete}
            />
          ))}
        </div>
      </main>
      {taskForm ? (
        <TaskForm
          key={taskForm.task?.id || 'new'}
          task={taskForm.task}
          columns={sortedColumns}
          onSubmit={handleSubmit}
          onClose={() => setTaskForm(null)}
        />
      ) : null}
      {taskToDelete ? (
        <ConfirmDialog
          title="Delete task?"
          message={`"${taskToDelete.title}" will be permanently deleted.`}
          onConfirm={() => { deleteTask(taskToDelete.id); setTaskToDelete(null); }}
          onCancel={() => setTaskToDelete(null)}
        />
      ) : null}
    </div>
  );
}