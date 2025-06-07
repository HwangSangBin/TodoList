/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import { useEffect, useRef, useState } from 'react'
import axios from 'axios';

function Web() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onChangeId = (event) => {
        setUsername(event.target.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const onClickLogin = async () => {
        const response = await axios.post("http://localhost:8080/api/login", {username:username, password:password});
        console.log(response.data);
    }
    return(
        <div>
            <input
                value={username} 
                onChange={onChangeId}/>
            <input
                type='password'
                value={password}
                onChange={onChangePassword}/>
            <button onClick={onClickLogin}>로그인</button>
        </div>
    )
}

export default Web;