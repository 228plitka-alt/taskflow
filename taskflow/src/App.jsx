import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import TaskTabs from './components/TaskTabs';
import AddTaskButton from './components/AddTaskButton';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';
import StatsCards from './components/StatsCards';
import ProgressChart from './components/ProgressChart';
import './App.css';

const initialTasks = [
  { id: 1, title: 'Подготовить презентацию', desc: 'Тема: React компоненты', tag: 'Учеба', priority: 'Высокий', date: '2026-11-23', time: '14:00', status: 'Не начато' },
  { id: 2, title: 'Изучить React компоненты', desc: 'Практическая работа №10', tag: 'Учеба', priority: 'Средний', date: '2026-11-23', time: '12:00', status: 'Выполнено' },
  { id: 3, title: 'Практическая работа №10', desc: 'Создать собственный компонент', tag: 'Проект', priority: 'Средний', date: '2026-11-24', time: '10:00', status: 'Не начато' },
  { id: 4, title: 'Прочитать документацию', desc: 'React Hooks и useState', tag: 'Личное', priority: 'Низкий', date: '2026-11-20', time: '18:00', status: 'Не начато' },
  { id: 5, title: 'Подготовиться к экзамену', desc: 'Повторить основные темы', tag: 'Учеба', priority: 'Высокий', date: '2026-11-21', time: '09:00', status: 'Не начато' },
];

const TODAY_STR = '2026-11-23';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 10, 23)); // 23 ноября по умолчанию
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Добавление задачи
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setIsModalOpen(false);
  };

  // Удаление
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Смена статуса (только между "Не начато" и "Выполнено")
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === 'Выполнено' ? 'Не начато' : 'Выполнено' } 
        : task
    ));
  };

  // --- ФИЛЬТРАЦИЯ ---
  let tasksForDate = tasks;
  if (selectedDate) {
    const [year, month, day] = [
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      selectedDate.getDate()
    ];
    const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    tasksForDate = tasks.filter(t => t.date === dateStr);
  }

  const finalTasks = tasksForDate.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          task.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesFilter = true;
    if (filter === 'Не начато') matchesFilter = task.status === 'Не начато';
    else if (filter === 'Завершенные') matchesFilter = task.status === 'Выполнено';
    else if (filter === 'Просроченные') {
      matchesFilter = task.status === 'Просрочено' || task.date < TODAY_STR;
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="top-bar">
          <SearchBar onSearch={setSearchQuery} />
          <div className="top-bar-right">
            <AddTaskButton onClick={() => setIsModalOpen(true)} />
            <div className="user-profile">
              <div className="notification-icon">🔔<span className="badge">3</span></div>
              <div className="avatar">👩🏻</div>
              <div className="user-info">
                <span className="user-name">Иванова Ульяна</span>
                <span className="user-role">Студент</span>
              </div>
            </div>
          </div>
        </header>

        <StatsCards tasks={tasksForDate} />

        <div className="dashboard-grid">
          <div className="left-panel">
            <TaskTabs 
              currentFilter={filter} 
              onFilterChange={setFilter} 
              tasks={tasksForDate} 
            />
            <TaskList 
              tasks={finalTasks} 
              onDelete={deleteTask} 
              onToggle={toggleTask} 
            />
          </div>
          
          <div className="right-panel">
            <Calendar 
              selectedDate={selectedDate} 
              onDateSelect={(date) => {
                setSelectedDate(date);
                setFilter('Все'); 
              }} 
              tasks={tasks} 
            />
            <ProgressChart tasks={tasks} />
          </div>
        </div>
      </main>

      {isModalOpen && (
        <AddTaskModal 
          onClose={() => setIsModalOpen(false)} 
          onAdd={addTask} 
          defaultDate={selectedDate ? selectedDate.toISOString().split('T')[0] : TODAY_STR}
        />
      )}
    </div>
  );
}

export default App;