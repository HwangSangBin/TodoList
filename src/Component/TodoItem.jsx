import "./TodoItem.css"

const TodoItem = ({todoid, checkBox, todoContent, todoDate, onUpdate, onDelete}) => {
    const onUpdateCheck = () => {
        onUpdate(todoid);
    }

    const onDeleteBtn = () =>  {
        onDelete(todoid);
    }
    return(
        <div className="TodoItem">
            <input 
                checked={checkBox}
                onChange={onUpdateCheck}
                type="checkbox" />
            <div className="Content">{todoContent}</div>
            <div className="WriteDate">{new Date(todoDate).toLocaleDateString()}</div>
            <button onClick={onDeleteBtn}>제거</button>
        </div>
    )
}

export default TodoItem;