import TaskCard from './TaskCard.jsx';

export default function BoardColumn({ title, tasks, onDelete }) {
  return (
    <section className="column">
      <header className="column__header">
        <h2 className="column__title">{title}</h2>
        <span className="column__count">{tasks.length}</span>
      </header>
      <div className="column__list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}