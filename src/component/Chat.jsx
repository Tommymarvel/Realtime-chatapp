import React from 'react';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Johnson</span>
        <div className="chatIcons">
          <i class="fa-solid fa-camera fa-fade"></i>
          <i class="fa-solid fa-user-plus fa-fade"></i>
          <i class="fa-solid fa-ellipsis fa-fade"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
