import React, { useState } from 'react';
import "../../styles/Chatbox.css";

const Chatbox = () => {

  // State to store user input and chat history
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // State to keep track of whether the chatbox is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle user input and send it to OpenAI API
  const handleUserInput = async () => {
    // Fetch OpenAI API
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <YOUR_API_KEY>' // Replace with your OpenAI API key
      },
      body: JSON.stringify({
        prompt: userInput,
        max_tokens: 60,
        n: 1,
        stop: "\n"
      })
    });

    // Get response from OpenAI API and update chat history
    const data = await response.json();
    setChatHistory([...chatHistory, { sender: "user", message: userInput }, { sender: "bot", message: data.choices[0].text }]);

    // Clear user input
    setUserInput("");
  }

  // Function to handle user input on "Enter" key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleUserInput();
    }
  }

  // Function to toggle chatbox expansion
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`chatbox-container ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <div className="chatbox-header">
        <h4>Chat with our AI</h4>
        <span>Powered by OpenAI's GPT-3</span>
      </div>
      <div className="chatbox-history">
        {chatHistory.map((item, index) => (
          <div className={`chatbox-message ${item.sender}`} key={index}>
            {item.message}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Type your message here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleUserInput}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
