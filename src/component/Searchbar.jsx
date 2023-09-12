import React from 'react';

const Searchbar = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" name="" id="" placeholder="Search Chat" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/14090498/pexels-photo-14090498.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Johnson</span>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
