// js/factories/messageFactory.js
class MessageFactory {
    static createMessage(text, displayName) {
      return {
        text: text,
        displayName: displayName,
        timestamp: new Date()
      };
    }
  }
  
  export default MessageFactory;
  