import React from 'react';

const Input = () => {
  return (
    <div className="input">
      <input type="text" name="" id="" placeholder="write message here" />
      <div className="send">
        <i class="fa-regular fa-paperclip"></i>
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <i class="fa-regular fa-image"></i>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
