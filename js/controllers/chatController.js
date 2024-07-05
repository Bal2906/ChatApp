// js/controllers/chatController.js
import firebaseInstance from '../firebase/firebaseConfig.js';
import Chat from '../models/chatModel.js';
import ChatView from '../views/chatView.js';
import MessageFactory from '../factories/messageFactory.js';

class ChatController {
  constructor() {
    this.db = firebaseInstance.db;
    this.chatView = new ChatView();
    this.initListeners();
  }

  initListeners() {
    document.getElementById('messageForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const messageText = e.target.message.value;
      const message = MessageFactory.createMessage(messageText, 'User1'); // Replace 'User1' with actual user display name
      this.sendMessage('exampleRoomId', message); // Replace with actual room ID
      e.target.message.value = '';
    });
  }

  listenForMessages(roomId) {
    const chatRef = this.db.collection('chats').doc(roomId);
    chatRef.onSnapshot((doc) => {
      if (doc.exists) {
        const chatData = doc.data();
        const chat = new Chat(roomId, chatData.messages);
        chat.messages.forEach((message) => this.chatView.displayMessage(message));
      }
    });
  }

  sendMessage(roomId, message) {
    const chatRef = this.db.collection('chats').doc(roomId);
    chatRef.update({
      messages: firebase.firestore.FieldValue.arrayUnion(message)
    });
  }
}

export default ChatController;
