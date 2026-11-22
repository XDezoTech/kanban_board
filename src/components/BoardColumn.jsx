import TaskCard from './TaskCard.jsx';

export default function BoardColumn({ title, tasks }) {
  return (
    <section className="column">
      <header className="column__header">
        <h2 className="column__title">{title}</h2>
        <span className="column__count">{tasks.length}</span>
      </header>
      <div className="column__list">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            dueDate={task.dueDate}
            assignee={task.assignee}
          />
        ))}
      </div>
    </section>
  );
}