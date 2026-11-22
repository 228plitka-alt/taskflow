function ProgressChart({ tasks }) {
  const total = tasks.length || 1;
  const done = tasks.filter(t => t.status === 'Выполнено').length;
  const notDone = total - done;
  
  const donePercent = Math.round((done / total) * 100);
  const notDonePercent = 100 - donePercent;

  return (
    <div className="progress-chart-container">
      <h3>Статус задач</h3>
      <div className="chart-content">
        {/* Диаграмма: зеленый (выполнено), синий (не выполнено) */}
        <div className="donut-chart" style={{ 
          background: `conic-gradient(
            #10b981 0% ${donePercent}%, 
            #3b82f6 ${donePercent}% 100%
          )` 
        }}>
          <div className="donut-inner">
            <h2>{donePercent}%</h2>
            <p>Выполнено</p>
          </div>
        </div>
        
        <ul className="legend">
          <li><span className="dot green"></span> Выполнено <b>{done}</b></li>
          <li><span className="dot blue"></span> Не выполнено <b>{notDone}</b></li>
        </ul>
      </div>
    </div>
  );
}
export default ProgressChart;