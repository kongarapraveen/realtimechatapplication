document.addEventListener('DOMContentLoaded', function() {
    const authContainer = document.getElementById('auth-container');
    const chatContainer = document.getElementById('chat-container');
    const authForm = document.getElementById('auth-form');
    const authTitle = document.getElementById('auth-title');
    const authSubmitButton = document.getElementById('auth-submit');
    const toggleAuthMode = document.getElementById('toggle-auth-mode');
    let isSignInMode = true;

    // Toggle between Sign In and Register mode
    toggleAuthMode.addEventListener('click', function() {
        isSignInMode = !isSignInMode;
        if (isSignInMode) {
            authTitle.textContent = 'Sign In';
            authSubmitButton.textContent = 'Sign In';
            toggleAuthMode.textContent = 'Register here';
        } else {
            authTitle.textContent = 'Register';
            authSubmitButton.textContent = 'Register';
            toggleAuthMode.textContent = 'Sign In here';
        }
    });

    // Handle form submission (authentication)
    authForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (isSignInMode) {
            // Handle Sign In
            handleSignIn(username, password);
        } else {
            // Handle Registration
            handleRegister(username, password);
        }
    });

    function handleSignIn(username, password) {
        // Simulate authentication (replace this with real authentication logic)
        if (username === "user" && password === "pass") {
            showChatInterface();
        } else {
            alert("Invalid username or password!");
        }
    }

    function handleRegister(username, password) {
        // Simulate registration (replace this with real registration logic)
        alert(`User ${username} registered successfully!`);
        // Automatically sign in after registration
        showChatInterface();
    }

    function showChatInterface() {
        authContainer.style.display = 'none';
        chatContainer.style.display = 'flex';
    }

    // Chat functionality
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatHistory = document.getElementById('chat-history');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = messageText;
            chatHistory.appendChild(messageElement);
            chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
            messageInput.value = ''; // Clear the input field

            // Here you would add code to send the message to the server
            // and broadcast it to other users in the chat.
        }
    }

    function receiveMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList
