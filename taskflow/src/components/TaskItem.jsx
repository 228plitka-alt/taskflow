function TaskItem({ task, onDelete, onToggle }) {
  const TODAY_STR = '2026-11-23';
  const isOverdue = task.date < TODAY_STR;

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return `${day} ${months[parseInt(month) - 1]}`;
  };

  // Определяем статус для отображения
  const displayStatus = isOverdue ? 'Просрочено' : task.status;
  const statusClass = displayStatus.replace(' ', '-').toLowerCase();

  return (
    <div className={`task-row ${task.status === 'Выполнено' ? 'completed' : ''}`}>
      <div className="task-col-main">
        <input 
          type="checkbox" 
          className="task-checkbox" 
          checked={task.status === 'Выполнено'}
          onChange={() => onToggle(task.id)} 
        />
        <div className={`priority-line ${task.priority.toLowerCase()}`}></div>
        <div className="task-info">
          <h4>{task.title}</h4>
          <p>{task.desc}</p>
        </div>
      </div>
      
      <div className="task-col-tags">
        <span className="tag-blue">{task.tag}</span>
        {task.priority === 'Высокий' && <span className="tag-red">Высокий</span>}
      </div>

      <div className="task-col-date">
        📅 {formatDate(task.date)}, {task.time}
      </div>

      <div className="task-col-status">
        <span className={`status-badge ${statusClass}`}>
          {displayStatus}
        </span>
      </div>

      <div className="task-col-actions">
        <button className="btn-icon edit">✎</button>
        <button className="btn-icon delete" onClick={() => onDelete(task.id)}>🗑</button>
      </div>
    </div>
  );
}
export default TaskItem;