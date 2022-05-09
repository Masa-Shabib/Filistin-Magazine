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
            setMessages(prevMessages => {
                return [...prevMessages, msg];
            })
        });
        return () => socket.disconnect(true);
    });

    const changeUser = (name) => {
        console.log(name)
        setLogUser(name);
    };
    return (
        <>
        {console.log(logUser)} 
            {!logUser && <UserForm changeUser={changeUser} />}
            {logUser && <Chat user={logUser} messages={messages} socket={socket} />}
        </>
    );
}

export default Main