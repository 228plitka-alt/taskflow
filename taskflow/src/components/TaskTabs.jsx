function TaskTabs({ currentFilter, onFilterChange, tasks }) {
  const TODAY_STR = '2026-11-23';

  const filters = [
    { name: 'Все', count: tasks.length },
    { name: 'Не начато', count: tasks.filter(t => t.status === 'Не начато' && t.date >= TODAY_STR).length },
    { name: 'Завершенные', count: tasks.filter(t => t.status === 'Выполнено').length },
    { name: 'Просроченные', count: tasks.filter(t => t.date < TODAY_STR).length },
  ];

  return (
    <div className="task-tabs">
      {filters.map(f => (
        <button 
          key={f.name}
          className={currentFilter === f.name ? 'active' : ''}
          onClick={() => onFilterChange(f.name)}
        >
          {f.name} <span className="badge">{f.count}</span>
        </button>
      ))}
    </div>
  );
}
export default TaskTabs;