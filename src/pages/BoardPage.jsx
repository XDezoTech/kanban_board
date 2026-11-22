import Navbar from '../components/Navbar.jsx';
import BoardColumn from '../components/BoardColumn.jsx';
import { DEFAULT_COLUMNS, INITIAL_TASKS } from '../utils/taskHelpers.js';

export default function BoardPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="board-page">
        <header className="board-header">
          <div className="board-header__text">
            <h1>Boardly Launch</h1>
            <p>Plan, build, and ship the Boardly Kanban experience.</p>
          </div>
        </header>
        <div className="board-columns">
          {DEFAULT_COLUMNS.map(column => (
            <BoardColumn
              key={column.id}
              title={column.title}
              tasks={INITIAL_TASKS.filter(task => task.status === column.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}