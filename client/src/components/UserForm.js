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
        <div style={{display: "flex",
            justifyContent:"space-around",marginTop:"40px"}}>
            <form onSubmit={submitHandler} >
                <h3>Name</h3>
                <p><input  className="form-control" type="text" onChange={e => setName(e.target.value)} style={{width:"180px"}}/></p>
                <p><input type="submit" className="btn btn-outline-primary"/></p>
                
                
            </form>
        </div>
    )
}

export default UserForm