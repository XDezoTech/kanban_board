import { useState } from 'react';
import Modal from './Modal.jsx';
import { PRIORITIES } from '../utils/taskHelpers.js';

export default function TaskForm({ task, columns, onSubmit, onClose }) {
  const [values, setValues] = useState({
    title: task?.title || '',
    description: task?.description || '',
    status: task?.status || columns[0]?.id || '',
    priority: task?.priority || 'medium',
    assignee: task?.assignee || '',
    dueDate: task?.dueDate || '',
  });

  function update(field, value) {
    setValues(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.title.trim()) return;
    onSubmit(values);
  }

  return (
    <Modal title={task ? 'Edit task' : 'Create task'} onClose={onClose}>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="task-title">Title</label>
          <input id="task-title" value={values.title} onChange={e => update('title', e.target.value)} autoComplete="off" />
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="task-status">Column</label>
            <select id="task-status" value={values.status} onChange={e => update('status', e.target.value)}>
              {columns.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="task-priority">Priority</label>
            <select id="task-priority" value={values.priority} onChange={e => update('priority', e.target.value)}>
              {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="task-assignee">Assignee</label>
            <input id="task-assignee" value={values.assignee} onChange={e => update('assignee', e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="task-due">Due date</label>
            <input id="task-due" type="date" value={values.dueDate} onChange={e => update('dueDate', e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="task-description">Description</label>
          <textarea id="task-description" rows={3} value={values.description} onChange={e => update('description', e.target.value)} />
        </div>
        <div className="form-actions">
          <button type="button" className="button button--ghost" onClick={onClose}>Cancel</button>
          <button type="submit" className="button button--primary">{task ? 'Save changes' : 'Create task'}</button>
        </div>
      </form>
    </Modal>
  );
}