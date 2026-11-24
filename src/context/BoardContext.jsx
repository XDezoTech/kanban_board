import { createContext, useContext, useMemo, useState } from 'react';
import {
  DEFAULT_COLUMNS,
  INITIAL_TASKS,
  PRIORITIES,
  generateId,
} from '../utils/taskHelpers.js';

const BoardContext = createContext(null);

const INITIAL_BOARD = {
  title: 'Boardly Launch',
  description: 'Plan, build, and ship the Boardly Kanban experience.',
  columns: DEFAULT_COLUMNS,
  tasks: INITIAL_TASKS,
};

export function BoardProvider({ children }) {
  const [board, setBoard] = useState(INITIAL_BOARD);

  const sortedColumns = useMemo(
    () => [...board.columns].sort((a, b) => a.order - b.order),
    [board.columns]
  );

  function addTask(data) {
    setBoard(prev => ({
      ...prev,
      tasks: [
        ...prev.tasks,
        {
          id: generateId('task'),
          title: data.title.trim(),
          description: (data.description || '').trim(),
          status: data.status,
          priority: PRIORITIES.includes(data.priority) ? data.priority : 'medium',
          assignee: (data.assignee || '').trim(),
          dueDate: data.dueDate || '',
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  function updateTask(id, patch) {
    setBoard(prev => ({
      ...prev,
      tasks: prev.tasks.map(task =>
        task.id === id ? { ...task, ...patch } : task
      ),
    }));
  }

  function deleteTask(id) {
    setBoard(prev => ({ ...prev, tasks: prev.tasks.filter(task => task.id !== id) }));
  }

  const value = useMemo(
    () => ({ board, sortedColumns, addTask, updateTask, deleteTask }),
    [board, sortedColumns]
  );

  return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>;
}

export function useBoard() {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error('useBoard must be inside BoardProvider');
  return ctx;
}