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

  constructor() { 
  }

  checkCurrentForm() {
    let userObj = this.user;
    //console.log(userObj.username + " " + userObj.username.length)
    if (userObj.username.length == 8 && (userObj.password.length >= 8 && userObj.password.length <= 12 )) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }

  submitInputs() {
    let userObj = this.user;
    console.log(userObj);
  }

  isDataValid(username, password) {
    if (username.valid && password.valid) {
      return true;
    }
    return false;
  }
}
