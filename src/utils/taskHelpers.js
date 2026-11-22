export const PRIORITIES = ['low', 'medium', 'high'];

export const DEFAULT_COLUMNS = [
  { id: 'backlog', title: 'Backlog', order: 0 },
  { id: 'todo', title: 'To Do', order: 1 },
  { id: 'in-progress', title: 'In Progress', order: 2 },
  { id: 'review', title: 'Review', order: 3 },
  { id: 'done', title: 'Done', order: 4 },
];

export function generateId(prefix = 'id') {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export const INITIAL_TASKS = [
  { id: 't1', title: 'Set up Vite', description: 'Confirm dev server runs.', priority: 'high', status: 'backlog', dueDate: '2026-11-25', assignee: 'Alex', createdAt: new Date().toISOString() },
  { id: 't2', title: 'Sketch board layout', description: 'Plan the navbar and columns.', priority: 'medium', status: 'backlog', dueDate: '', assignee: 'Priya', createdAt: new Date().toISOString() },
  { id: 't3', title: 'Build TaskForm', description: 'Create task modal with validation.', priority: 'high', status: 'todo', dueDate: '2026-11-28', assignee: 'Sam', createdAt: new Date().toISOString() },
  { id: 't4', title: 'Review keyboard nav', description: 'Check focus order.', priority: 'medium', status: 'review', dueDate: '', assignee: 'Priya', createdAt: new Date().toISOString() },
  { id: 't5', title: 'Publish README', description: 'Document setup and features.', priority: 'low', status: 'done', dueDate: '', assignee: 'Sam', createdAt: new Date().toISOString() },
];