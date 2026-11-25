import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import BoardColumn from '../components/BoardColumn.jsx';
import TaskForm from '../components/TaskForm.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { useBoard } from '../context/BoardContext.jsx';

export default function BoardPage() {
  const { board, sortedColumns, addTask, deleteTask } = useBoard();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <main className="board-page">
        <header className="board-header">
          <div className="board-header__text">
            <h1>{board.title}</h1>
            <p>{board.description}</p>
          </div>
          <button type="button" className="button button--primary" onClick={() => setIsFormOpen(true)}>
            + New task
          </button>
        </header>
        <div className="board-columns">
          {sortedColumns.map(column => (
            <BoardColumn
              key={column.id}
              title={column.title}
              tasks={board.tasks.filter(task => task.status === column.id)}
              onDelete={setTaskToDelete}
            />
          ))}
        </div>
      </main>
      {isFormOpen ? (
        <TaskForm columns={sortedColumns} onSubmit={v => { addTask(v); setIsFormOpen(false); }} onClose={() => setIsFormOpen(false)} />
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