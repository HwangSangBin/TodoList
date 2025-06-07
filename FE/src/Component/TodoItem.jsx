import "./TodoItem.css"

const TodoItem = ({todoId, checkBox, todoContent, todoDate, onUpdate, onDelete}) => {
    const onUpdateCheck = () => {
        onUpdate(todoId);
    }

    const onDeleteBtn = () =>  {
        onDelete(todoId);
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