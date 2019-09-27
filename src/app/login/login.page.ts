import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})

export class LoginPage {
  user = {
    username: '',
    password: '',
    remembered: null
  };
  isFormValid = false;
  isUsernameValid = false;
  isPasswordValid = false;

  constructor() {
  }

  checkCurrentForm() {
    let userObj = this.user;
    this.isUsernameValid = this.usernameValidation(userObj.username);
    this.isPasswordValid = this.passwordValidation(userObj.password);
    if (this.isUsernameValid && this.isPasswordValid) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }

  usernameValidation(username) {
    if (username.length == 8) {
      return true;
    } else {
      return false;
    }
  }

  passwordValidation(password) {
    if (password.length >= 8 && password.length <= 12) {
      return true;
    } else {
      return false;
    }
  }

  submitInputs() {
    this.checkCurrentForm();
    if (this.isFormValid) {
      alert("form is valid");
    } else {
      alert("form is invalid")
    }
  }
}
