import React, { useState, useEffect } from 'react';

function Chat(props) {
    const {socket, messages, user, leftMSG} = props;
    const [newMessage, setNewMessage] = useState("");
    // console.log(messages)
    const submitNewMessage = () => {
        leftMSG({"sender": user, "time": new Date(), "message": newMessage})
        setNewMessage("");
    }

    // useEffect(() => {
    //     socket.on('Greeting', data => console.log(data));

    // }, [socket]);

    return (
        <div className="row justify-content-center m-4">
        <div className="col-6 border rounded" style={{height:"185px" , width:"260px", padding:"5px"}}>
            <div className="row-col p-2"  style={{height:"130px" , width:"200px"}}>
                {/* Chat messages will appear in this ScrollToBottom div */}
                    {messages.map((msgObject, idx) => 
                        msgObject.sender === "server" ?
                            <div key={idx} className="py-2" style={{textAlign: 'right', fontStyle: 'italic', color: 'gray'}}>
                                {msgObject.message}
                            </div> 
                            :
                            msgObject.sender === user ?
                                <div key={idx} className="d-flex flex-row-reverse py-1">
                                    <div className="col-auto rounded-top rounded-left p-2" style={{background: '#ADD8E6'}}>
                                        {msgObject.message}
                                    </div>
                                </div> 
                                :
                                <div key={idx} className="py-1">
                                    <div style={{textAlign: 'left', fontSize: 'small', color: 'gray'}}>{msgObject.sender}</div>
                                    <div className="d-flex flex-row">
                                        <div className="col-auto rounded-top rounded-right p-2" style={{border:'solid 1px #ADD8E6'}}>
                                            {msgObject.message}
                                        </div>
                                    </div> 
                                </div>                      
                    )}
            </div>
            {/* text input box and send button */}
            <div className="row" style={{height: '30px'}}>
                <div className="col-8"> 
                    <input value={newMessage} onChange={ (e) => setNewMessage(e.target.value) } type="text" className="form-control" style={{width:"160px"}}/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 ">
                    <button onClick={ (e) => {e.preventDefault(); submitNewMessage()} } className="btn btn-outline-primary">Send</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Chat;