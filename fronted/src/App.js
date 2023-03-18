import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
import Pusher from "pusher-js"
import axios from "./components/axio";

import React, { useEffect, useState } from "react";
import "./style/App.css";



function App() {
  const [messages,setMessages]=useState([]);

  useEffect(()=>{
      axios.get('/messages/sync')
      .then((response)=>{
        setMessages(response.data);
      });

  },[]);





  useEffect(()=>{
    const pusher=new Pusher('239b89a3cdd14d8289b4', {
      cluster: 'ap2'
    });

      const channel = pusher.subscribe('messages');
      channel.bind("inserted", (newMessage)=>{
        setMessages([...messages,newMessage])
      });
      return ()=>{
        channel.unbind_all();
        channel.unsubscribe();
      };

  },[messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
