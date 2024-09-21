function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const selectedLanguage = document.getElementById('language-selector').value;
    const chatBox = document.getElementById('chat-box');

    if (!userInput.trim()) {
        return; 
    }

    appendMessageToChat("You", userInput);
    document.getElementById('user-input').value = ''; // Clear the input field

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: userInput,
            language: selectedLanguage
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            throw new Error(data.error);
        }
        
        appendMessageToChat("Bot", data.response);
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessageToChat("Bot", "Error generating response.");
    });
}


// Function to append a message to the chatbox
function appendMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to initialize event listeners for sending messages with Enter key
function initChat() {
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    userInput.focus();
}

window.onload = initChat;
