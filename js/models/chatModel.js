// js/models/chatModel.js
export default class Chat {
    constructor(roomId, messages = []) {
      this.roomId = roomId;
      this.messages = messages;
    }
  
    addMessage(message) {
      this.messages.push(message);
    }
  }
  