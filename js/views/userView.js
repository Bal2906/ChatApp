// js/views/userView.js
export default class UserView {
    constructor() {
      this.registerForm = document.getElementById('registerForm');
      this.loginForm = document.getElementById('loginForm');
    }
  
    getRegisterData() {
      return {
        email: this.registerForm.email.value,
        password: this.registerForm.password.value
      };
    }
  
    getLoginData() {
      return {
        email: this.loginForm.email.value,
        password: this.loginForm.password.value
      };
    }
  }
  