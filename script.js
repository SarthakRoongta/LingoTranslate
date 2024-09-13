function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const language = document.getElementById('language-selector').value;

    if (userInput.trim() === '') return;

    displayMessage('User: ' + userInput);
    translateMessage(userInput, language);
    document.getElementById('user-input').value = ''; 
}

function displayMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;  
}

async function translateMessage(message, language) {
    const apiKey = 'YOUR_API_KEY';  
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            q: message,
            target: language
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();
    const translatedMessage = data.data.translations[0].translatedText;
    displayMessage(`Bot (${language}): ${translatedMessage}`);
}