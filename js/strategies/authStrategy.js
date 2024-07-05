// js/strategies/authStrategy.js
import firebaseInstance from '../firebase/firebaseConfig.js';

class AuthStrategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  authenticate() {
    return this.strategy.authenticate();
  }
}

class EmailAuthStrategy {
  authenticate(email, password) {
    return firebaseInstance.auth.signInWithEmailAndPassword(email, password);
  }
}

class GoogleAuthStrategy {
  authenticate() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebaseInstance.auth.signInWithPopup(provider);
  }
}

class FacebookAuthStrategy {
  authenticate() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebaseInstance.auth.signInWithPopup(provider);
  }
}

export { AuthStrategy, EmailAuthStrategy, GoogleAuthStrategy, FacebookAuthStrategy };
