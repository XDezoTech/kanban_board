export default function TaskCard({ title, description, priority, dueDate, assignee }) {
  return (
    <article className="task-card">
      <h3 className="task-card__title">{title}</h3>
      {description ? <p className="task-card__description">{description}</p> : null}
      <div className="task-card__meta">
        <span className={`badge badge--${priority}`}>{priority}</span>
        <span className="task-card__due">{dueDate || 'No due date'}</span>
        <span className="task-card__assignee">{assignee || 'Unassigned'}</span>
      </div>
    </article>
  );
}