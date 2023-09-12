import React from 'react';


const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Fast Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14090498/pexels-photo-14090498.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          className="userimg"
        />
        <span>Tommy</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
