function Calendar({ selectedDate, onDateSelect, tasks }) {
  const emptyDays = 6; 
  const daysInMonth = 30;
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  return (
    <div className="calendar">
      <div className="calendar-header">
        <button>{'<'}</button>
        <h3>Ноябрь 2026</h3>
        <button>{'>'}</button>
      </div>
      <div className="calendar-grid">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(d => <div key={d} className="day-name">{d}</div>)}
        {[...Array(emptyDays)].map((_, i) => <div key={`empty-${i}`}></div>)}
        
        {days.map(day => {
          const dateStr = `2026-11-${day.toString().padStart(2, '0')}`;
          const hasTasks = tasks.some(t => t.date === dateStr);
          const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === 10;
          const isToday = day === 23;

          return (
            <div 
              key={day} 
              className={`calendar-day ${isSelected ? 'selected' : ''} ${hasTasks ? 'has-tasks' : ''} ${isToday && !isSelected ? 'today' : ''}`}
              onClick={() => onDateSelect(new Date(2026, 10, day))}
            >
              {day}
              {hasTasks && <span className="dot"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Calendar;