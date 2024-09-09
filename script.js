// script.js
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText !== '') {
        // Create a new message element
        const message = document.createElement('div');
        message.className = 'message sent';
        message.innerHTML = `<p>${messageText}</p>`;
        
        // Add the message to the chat-messages div
        const chatMessages = document.querySelector('.chat-messages');
        chatMessages.appendChild(message);
        
        // Clear the input
        messageInput.value = '';
        
        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
