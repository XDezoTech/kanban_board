import Modal from './Modal.jsx';

export default function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  return (
    <Modal title={title} onClose={onCancel}>
      <p style={{ margin: '0 0 1rem', color: 'var(--text-muted)' }}>{message}</p>
      <div className="form-actions">
        <button type="button" className="button button--ghost" onClick={onCancel}>Cancel</button>
        <button type="button" className="button button--danger" onClick={onConfirm}>Delete</button>
      </div>
    </Modal>
  );
}