function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Поиск задач, меток, описания..." 
        onChange={(e) => onSearch(e.target.value)}
      />
      <select>
        <option>Все метки</option>
        <option>Учеба</option>
        <option>Проект</option>
        <option>Личное</option>
        <option>Разработка</option>
      </select>
    </div>
  );
}
export default SearchBar;