// js/views/chatView.js
export default class ChatView {
    constructor() {
      this.messageList = document.getElementById('messageList');
    }
  
    displayMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = `${message.displayName}: ${message.text}`;
      this.messageList.appendChild(messageElement);
    }
  }
  