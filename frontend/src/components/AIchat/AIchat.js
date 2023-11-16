import React, { useState } from 'react';

const AIchat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleChatSubmit = () => {
    const inputToLower = userInput.toLowerCase();

    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    const farewell = ['bye', 'goodbye', 'see you', 'farewell'];
    const questions = ['how are you', 'what is your name', 'who created you'];
    const compliments = ['you are amazing', 'great job', 'well done', 'you are great', 'i love you'];
    const contacts = ['contact', 'friend', 'block', 'report', 'request']
    const negatives = ['you can\'t', 'you cannot', 'you are bad', 'you suck', 'are you dumb']

    let aiResponse;

  
  const getRandomResponse = (responses) => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  if (farewell.some((farewellWord) => inputToLower.includes(farewellWord))) {
    aiResponse = 'Goodbye! Have a great day!';
  } else if (contacts.some((contact) => inputToLower.includes(contact))) {
    aiResponse = 'At the top of your screen, there is a menu. Click the \'Contacts\' option. \nNow, you can see your contacts. \nYou can start a conversation, delete them from your contacts, or report/block them. \nTo add a new contact, look at the menu and click the \'Friend requests\' option. \nNow you can accept friends, but also see new recommendations and add those.';
  } else if (questions.some((question) => inputToLower.includes(question))) {
    aiResponse = 'I am just a simple chatbot, no ChatGPT. My purpose is to answer questions about SKKUnite.';
  } else if (compliments.some((compliment) => inputToLower.includes(compliment))) {
    aiResponse = getRandomResponse(['Thank you! I appreciate your kind words.', 'You made my day!']);
  } else if (negatives.some((negative) => inputToLower.includes(negative))) {
    aiResponse = getRandomResponse(['I apologize. I am sorry, I am no ChatGPT.', 'I\'m still learning, sorry if I disappoint.']);
  } else if (greetings.some((greeting) => inputToLower.includes(greeting))) {
    aiResponse = getRandomResponse(["Hi there!", "Hello! What's up?", "Hey! How can I help you today?", "Greetings!"]);
  } else {
    aiResponse = "I'm sorry, I didn't quite catch that. Can you please rephrase?";
  }

    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { user: userInput, bot: aiResponse },
    ]);

    setUserInput('');
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index}>
            <strong>You:</strong> {message.user}
            <br />
            <strong>AI:</strong> {message.bot}
            <hr />
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleChatSubmit}>Send</button>
    </div>
  );
};

export default AIchat;
