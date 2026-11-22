function AddTaskButton({ onClick }) {
  return (
    <button className="add-task-btn" onClick={onClick}>
      + Добавить задачу
    </button>
  );
}
export default AddTaskButton;