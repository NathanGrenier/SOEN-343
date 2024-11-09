import React, { useState, useEffect } from "react";
import "./LiveChatPopUp.css";
import * as GoogleGenerativeAI from "@google/generative-ai";

type Message = {
  text: string;
  user: boolean;
};

const LiveChatPopUp = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const toggle = () => setIsToggled(!isToggled);

  const sendMessage = async () => {
    if (!userInput.trim()) return; // Ignore empty input

    const newMessage: Message = { text: userInput, user: true };
    setMessages([...messages, newMessage]);
    setUserInput("");

    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const websiteInfo =
        "I am a chatbot for a website that offers delivery services for packages. Our company, SwiftSend, offers, fast delivery, real time tracking, worldwide shipping, and 24/7 customer support. You can get a quotation for a delivery, you can request a delivery, you can tack your package using your tracking id. Here are our rates base price =0.5$ within canada or 5$ internationally, then you add 5$ per kg and if you want express shipping you add 15$. Don't answer unrelated questions. Don't forget what you have been told.";
      const prompt = `${websiteInfo} User's question: ${userInput}`;

      const result = await model.generateContent(prompt);
      const botText =
        typeof result.response.text === "function"
          ? result.response.text()
          : "Error in response";

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botText, user: false },
      ]);
    } catch (error) {
      console.error("Error generating content:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error generating response.", user: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="button-placement">
      <button className="chat-toggle-button" onClick={toggle}>
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
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.user ? "user" : "bot"}`}>
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // Prevents newline in input
                  sendMessage();
                }
              }}
            />
            <button
              className="send-button"
              onClick={sendMessage}
              disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChatPopUp;
