import React, { useState } from 'react'
import io from 'socket.io-client';

const UserForm = (props) => {
    const [name, setName] = useState("")
    const [socket] = useState(() => io(':8000'));
    const submitHandler = (e) => {
        e.preventDefault();
        props.changeUser(name);
        socket.emit("new-client-logon", { "sender": "server", "time": new Date(), "message": `${name} has joined the chat` }); 
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input type="text" onChange={e => setName(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default UserForm