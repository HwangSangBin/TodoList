import { useRef, useState } from "react";
import "./TodoWrite.css"

const TodoWrite = ({ onCreate }) => {
    const [todoContent, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (event) => {
        setContent(event.target.value);
    }
    const onSubmit = () => {
        if (!todoContent) {
            inputRef.current.focus();
            return;
        }
        onCreate(todoContent);
        setContent("");
    }

    return(
        <div className="TodoWrite">
            <h3>새로운 Todo 작성하기 🖋️</h3>
            <div className="WriteContent">
                <input
                    ref={inputRef}
                    value={todoContent}
                    onChange={onChangeContent}
                    placeholder="새로운 Todo..."/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoWrite;