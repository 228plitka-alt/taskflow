import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <div className="empty-state" style={{padding: '20px', textAlign: 'center', color: '#64748b'}}>Задач на этот день нет.</div>;
  }
  return (
    <div className="task-table-container">
      <div className="task-table-header">
        <span>Задача</span>
        <span>Метки</span>
        <span>Дата и время</span>
        <span>Статус</span>
        <span>Действия</span>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
}
export default TaskList;