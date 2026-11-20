import Navbar from '../components/Navbar.jsx';
import TaskCard from '../components/TaskCard.jsx';

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

        <div className="task-card-stack">
          <TaskCard
            title="Set up the Vite project"
            description="Create the React app and confirm the dev server runs."
            priority="high"
            dueDate="2026-11-25"
            assignee="Alex"
          />
          <TaskCard
            title="Sketch the board layout"
            description="Plan the toolbar and column layout."
            priority="medium"
            dueDate=""
            assignee=""
          />
        </div>
      </main>
    </div>
  );
}