import { useState } from 'react';

function AddTaskModal({ onClose, onAdd, defaultDate }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tag, setTag] = useState('Учеба');
  const [priority, setPriority] = useState('Средний');
  const [date, setDate] = useState(defaultDate || '2026-11-23'); 
  const [time, setTime] = useState('12:00');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    
    onAdd({ 
      title, desc, tag, priority, date, time, 
      status: 'Не начато' 
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Новая задача</h2>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Название задачи" required />
          <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Описание" />
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <select value={tag} onChange={e => setTag(e.target.value)}>
              <option>Учеба</option>
              <option>Проект</option>
              <option>Личное</option>
              <option>Разработка</option>
            </select>
            
            <select value={priority} onChange={e => setPriority(e.target.value)}>
              <option>Высокий</option>
              <option>Средний</option>
              <option>Низкий</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ flex: 1 }} />
            <input type="time" value={time} onChange={e => setTime(e.target.value)} style={{ flex: 1 }} />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>Отмена</button>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTaskModal;