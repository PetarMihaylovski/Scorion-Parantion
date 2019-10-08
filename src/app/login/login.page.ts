import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})

export class LoginPage implements OnInit {
  user = {
    username: '',
    password: '',
    remembered: null
  };
  isFormValid = false;
  isUsernameValid = false;
  isPasswordValid = false;

  constructor(private navCtrl: NavController) {
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
    if (username.length >= 7 && username.length <= 8) {
      return true;
    } else {
      return false;
    }
  }

  passwordValidation(password) {
    if (password.length >= 7 && password.length <= 12) {
      return true;
    } else {
      return false;
    }
  }

  submitInputs() {
    this.checkCurrentForm();
    if (this.isFormValid) {
      //alert("form is valid");
    } else {
      //alert("form is invalid")
    }
  }

  navigateToHomeScreen() {
    if (this.user.username == "lecturer" && this.user.password == "lecturer") {
      this.navCtrl.navigateForward('/lecturer-home');
    } else if (this.user.username == "student" && this.user.password == "student") {
      this.navCtrl.navigateForward('/student-home');
    } else {
      alert("invalid login");
    }
  }


  ngOnInit() {}


}
