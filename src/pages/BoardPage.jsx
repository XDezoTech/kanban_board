import Navbar from '../components/Navbar.jsx';
import BoardColumn from '../components/BoardColumn.jsx';
import { useBoard } from '../context/BoardContext.jsx';

export default function BoardPage() {
  const { board, sortedColumns } = useBoard();
  return (
    <div className="app">
      <Navbar />
      <main className="board-page">
        <header className="board-header">
          <div className="board-header__text">
            <h1>{board.title}</h1>
            <p>{board.description}</p>
          </div>
        </header>
        <div className="board-columns">
          {sortedColumns.map(column => (
            <BoardColumn
              key={column.id}
              title={column.title}
              tasks={board.tasks.filter(task => task.status === column.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}