const responses = {
    "hello": "Hello! How can I assist you today?",
    "bye": "Goodbye! Have a great day!",
    "how are you": "I'm a bot, but thank you for asking!",
    "what's your name": "I'm a SimpleChatBot. Nice to meet you!"
};

const getResponse = (userInput) => {
    const response = responses[userInput.toLowerCase()];
    if (response) {
        return response;
    } else {
        return "Sorry, I didn't understand that.";
    }
};

const chatlogs = document.getElementById('chatlogs');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const appendChat = (who, text) => {
    const newMessage = document.createElement('p');
    newMessage.textContent = `${who}: ${text}`;
    chatlogs.appendChild(newMessage);
};

sendButton.addEventListener('click', () => {
    const userText = userInput.value;
    userInput.value = '';
    appendChat('You', userText);
    appendChat('Bot', getResponse(userText));
});
