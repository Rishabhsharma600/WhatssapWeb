import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebarchat from '../components/Sidebarchat';

import "../style/Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon className='m-i' />
          </IconButton>
          <IconButton>
            <ChatIcon className='m-i' />
          </IconButton>
          <IconButton>
            <MoreVertIcon className='m-i' />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon className="search" />
          <input placeholder="Search or start new chat" type="text" />

        </div>
      </div>

      <div className="sidebar__chats">
        <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />
      </div>
    </div>
  )
}


export default Sidebar
