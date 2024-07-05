// js/main.js
import UserController from './controllers/userController.js';
import ChatController from './controllers/chatController.js';

document.addEventListener('DOMContentLoaded', () => {
  const userController = new UserController();
  const chatController = new ChatController();
  
  const roomId = 'exampleRoomId'; // Example room ID for demonstration
  chatController.listenForMessages(roomId);

  // Initialize message form submission
  document.getElementById('messageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const messageText = e.target.message.value;
    const message = {
      text: messageText,
      displayName: 'User1' // Replace with actual user display name
    };
    chatController.sendMessage(roomId, message);
    e.target.message.value = '';
  });
});
