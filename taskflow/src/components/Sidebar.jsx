import { useState } from 'react';

function Sidebar() {
  const [activeTab, setActiveTab] = useState('Задачи');
  
  const menuItems = [
    { name: 'Задачи', icon: '📅' },
    { name: 'Календарь', icon: '🗓️' },
    { name: 'Статистика', icon: '📊' },
    { name: 'Метки', icon: '🏷️' },
    { name: 'Настройки', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-area">
        <div className="logo-icon">✓</div>
        <div>
          <h2>TaskFlow</h2>
          <p>Планировщик задач</p>
        </div>
      </div>
      <nav>
        <ul>
          {menuItems.map(item => (
            <li 
              key={item.name}
              className={activeTab === item.name ? 'active' : ''}
              onClick={() => setActiveTab(item.name)}
            >
              <span>{item.icon}</span> {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;