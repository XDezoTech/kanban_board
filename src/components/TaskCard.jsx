export default function TaskCard({ task, onDelete }) {
  return (
    <article className="task-card">
      <h3 className="task-card__title">{task.title}</h3>
      {task.description ? <p className="task-card__description">{task.description}</p> : null}
      <div className="task-card__meta">
        <span className={`badge badge--${task.priority}`}>{task.priority}</span>
        <span>{task.dueDate || 'No due date'}</span>
        <span className="task-card__assignee">{task.assignee || 'Unassigned'}</span>
      </div>
      <div className="task-card__actions">
        <button
          type="button"
          className="button button--danger button--icon"
          onClick={() => onDelete(task)}
          title="Delete task"
          aria-label="Delete task"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </article>
  );
}