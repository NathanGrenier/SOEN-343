import React, { useState } from "react";
import "./LiveChatPopUp.css";


function LiveChatPopUp() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  return (
    <div className="button-placement">
      <button
        className="chat-toggle-button"
        onClick={toggle}>
       <h2>...</h2>
      </button>

      {isToggled && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Live chat</h3>
            <button className="close-chat-button" onClick={toggle}>
              x
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-messages">
              {/* Example messages */}
              <div className="message bot">Hello! How can I help you?</div>
              <div className="message user">
                Hi, I have a question about your service.
              </div>
            </div>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
            />
            <button className="send-button">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default LiveChatPopUp;
