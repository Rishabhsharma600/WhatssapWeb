import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'


import "../style/chat.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from 'axios';



import "../style/chat.css"

function Chat({ messages }) {

    const[input,setInput]=useState("");

   const sendMessage= async (e)=>{
        e.preventDefault();

         await axios.post('/messages/new',{
            message: input,
            name: "Demo APP",
            timestamp: "Just Now",
            received: false,
        });
        setInput('');
   };
   
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last Seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
            </div>
           
            <div className="chat__body">
                {messages.map((message) => {
                      return(
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                      )
                      })}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon className='chatIcons' />
                <form >
                    <input value={input} onChange={(e) =>setInput(e.target.value)} placeholder="Type a Message" type="text" />
                    <button onClick={sendMessage} type="sumbit" >Send a Message</button>
                </form>
                <MicIcon className='chatIcons' />
            </div>

        </div>
    )
}

export default Chat
