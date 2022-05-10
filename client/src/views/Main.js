import React, { useState, useEffect } from 'react'
import Chat from '../components/Chat';
import UserForm from '../components/UserForm';
import io from 'socket.io-client';


const Main = () => {
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    const [logUser, setLogUser] = useState(null);
    
    useEffect(() => {
        
        socket.on('message-from-server', msg => {
            console.log(msg);
            console.log(messages);
            setMessages([...messages, msg])
        });
    },[]);
    
   

    socket.on('weclome-from-server', msg => {
        console.log(msg);
        setMessages([...messages, msg])
    });     
    const changeUser = (name) => {
        console.log(name)
        setLogUser(name);
    };

    const onSubmitMSG = (newMSG)=>{
        socket.emit("new-client-msg", newMSG)
    }
    console.log(messages);
    return (
        <>
        {console.log("Welcome: "+logUser)} 
            {!logUser && <UserForm changeUser={changeUser} />}
            {logUser && <Chat user={logUser} messages={messages} socket={socket} leftMSG={onSubmitMSG}/>}
        </>
    );
}

export default Main