function StatsCards({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter(t => t.status === 'Выполнено').length;
  const notStarted = tasks.filter(t => t.status === 'Не начато' && t.date >= '2026-11-23').length;
  const overdue = tasks.filter(t => t.date < '2026-11-23').length;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-icon blue">📋</div>
        <div className="stat-info">
          <h3>{total}</h3>
          <p>Всего задач</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon green">✓</div>
        <div className="stat-info">
          <h3>{done}</h3>
          <p>Выполнено</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon orange">🕒</div>
        <div className="stat-info">
          <h3>{notStarted}</h3>
          <p>Не начато</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon red">!</div>
        <div className="stat-info">
          <h3>{overdue}</h3>
          <p>Просрочено</p>
        </div>
      </div>
    </div>
  );
}
export default StatsCards;