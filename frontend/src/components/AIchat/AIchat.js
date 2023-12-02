import React, { useState } from 'react';

const AIchat = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const intents = {
      "intents": [
        {
          "tag": "greeting",
          "patterns": [
            "Hi",
            "Hey",
            "Hello",
            "Good morning",
            "Morning",
            "Good afternoon",
            "Good evening",
            "What's up"
          ],
          "responses": [
            "Hey there! Welcome to SKKUnite. How can I assist you today?",
            "Hello! How can I help you with SKKUnite?"
          ]
        },
        {
          "tag": "goodbye",
          "patterns": ["Bye", "See you later", "Goodbye"],
          "responses": [
            "Goodbye! Feel free to return anytime you need assistance.",
            "Take care! If you have more questions, don't hesitate to ask."
          ]
        },
        {
          "tag": "thanks",
          "patterns": ["Thanks", "Thank you"],
          "responses": ["You're welcome! If you need anything else, just ask."]
        },
        {
          "tag": "profile",
          "patterns": [
            /.*create.*profile.*/,
            /.*guide.*setting.*profile.*/,
            /.*details.*need.*SKKUnite.*profile.*/
          ],
          "responses": [
            "To set up your profile, click on 'Profile' and fill in your SKKU credentials. It's that simple!",
            "Creating your profile is easy! Head to the 'Profile' section and input your SKKU credentials."
          ]
        },
        {
          "tag": "matching",
          "patterns": [
            /.*matching algorithm work.*/,
            /.*explain.*matching system.*pairs students.*/,
            /.*how.*paired.*/
          ],
          "responses": [
            "Our matching algorithm analyzes your profile information to suggest compatible connections between exchange and local students.",
            "The matching system uses your profile details to suggest students with shared interests and backgrounds."
          ]
        },
        {
          "tag": "friend_requests",
          "patterns": [
            /.*send.*friend requests.*/,
            /.*find.*friend requests.*/,
            /.*check.*friend requests.*/,
            /.*accept.*friend requests.*/,
            /.*decline.*friend requests.*/,
            /.*where.*friend requests.*/,
            /.*manage.*friend requests.*/
          ],
          "responses": [
            "You can send friend requests by visiting a user's profile. Any pending requests can be found in your 'Friend Requests' section.",
            "To send a friend request, go to a profile and click 'Send Request.' Check your 'Friend Requests' to manage them."
          ]
        },
        {
          "tag": "chat",
          "patterns": [
            /.*start.*chat.*with someone.*/,
            /.*find.*chats.*/,
            /.*open.*chat.*/,
            /.*initiate.*conversation.*match.*/
          ],
          "responses": [
            "To start a chat, go to a user's profile and click 'Initiate Chat.' Your ongoing conversations are in the 'Chats' section.",
            "You can begin chatting by visiting a profile and selecting 'Start Conversation.' All your chats are in the 'Chats' tab."
          ]
        },
        {
          "tag": "reviews",
          "patterns": [
            /.*review.*friendship.*/,
            /.*submit.*review.*connection.*/,
            /.*give.*feedback.*friendship.*/
          ],
          "responses": [
            "After a chat, you'll be prompted to review your friendship. Go to the 'Reviews' section to submit your feedback.",
            "You can review a friendship after chatting. Look for the 'Reviews' tab to share your thoughts."
          ]
        },
        {
          "tag": "entertainment",
          "patterns": [
            /.*entertainment options.*SKKUnite.*/,
            /.*explore.*entertainment features.*SKKUnite.*/,
            /.*activities.*available.*/,
            /.*to do.*SKKUnite.*/
          ],
          "responses": [
            "SKKUnite offers a podcast, news articles, forums for student queries, and soon, an AI chatbot for engaging discussions!",
            "You can enjoy our podcast, stay updated with news articles, ask questions on the forum, and soon, chat with our AI bot!"
          ]
        },
        {
          "tag": "reporting",
          "patterns": [
            /.*report.*behavior.*/,
            /.*report.*someone.*/,
            /.*report.*user.*/
          ],
          "responses": [
            "If you encounter any behavior not aligned with our code of conduct, use the 'Report' feature on the user's profile.",
            "You can report inappropriate behavior by clicking 'Report' on the user's profile. We take this seriously."
          ]
        },
        {
          "tag": "AI_chatbot",
          "patterns": [
            /.*AI chatbot.*SKKUnite.*/,
            /.*expect.*AI chatbot.*/,
            /.*details.*AI chatbot.*functionalities.*/,
            /.*AI chatbot.*work.*/
          ],
          "responses": [
            "Our AI chatbot is in development and will soon assist with various queries related to SKKUnite. Stay tuned for its launch!",
            "The AI chatbot is a work in progress. It aims to help with SKKUnite-related questions and enhance user experience."
          ]
        },
        {
          "tag": "acknowledgment",
          "patterns": [
            "Okay",
            "Hmm",
            "Ah",
            "Oh",
            "Yes",
            "Alright"
          ],
          "responses": [
            "Is there anything else you'd like to know about SKKUnite?",
            "How can I assist you further regarding SKKUnite?",
            "Do you have any questions about SKKUnite's features or functionalities?"
          ]
        }
      ]
    }
  

  const handleChatSubmit = () => {
    const inputToLower = userInput.toLowerCase();
    let aiResponse = '';

    for (const intent of intents.intents) {
      for (const pattern of intent.patterns) {
        if (
          (typeof pattern === 'string' && inputToLower.includes(pattern.toLowerCase())) ||
          (pattern instanceof RegExp && pattern.test(userInput))
        ) {
        const responses = intent.responses;
        const randomIndex = Math.floor(Math.random() * responses.length);
        aiResponse = responses[randomIndex];
        break;
      }
    }
  }

    if (aiResponse === '') {
      aiResponse = "I'm sorry, I didn't quite catch that. Can you please rephrase?";
    }

    setChatHistory(prevChatHistory => [
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
      <button className="login-button" onClick={handleChatSubmit}>Send</button>
    </div>
  );
};

export default AIchat;
