import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackModalComponent } from './feedback-modal/feedback-modal.component';
import { FormsModule } from '@angular/forms';
import { SettingsPopoverComponent } from './settings-popover/settings-popover.component';
import {HttpClientModule} from '@angular/common/http';

import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import * as firebase from 'firebase';
import { FilePath } from '@ionic-native/file-path/ngx';

var firebaseConfig = {
  apiKey: "AIzaSyCFA5zzq590lEGQC3QskVMoHHHnYmjlkRA",
  authDomain: "projectpersistent-660c4.firebaseapp.com",
  databaseURL: "https://projectpersistent-660c4.firebaseio.com",
  projectId: "projectpersistent-660c4",
  storageBucket: "projectpersistent-660c4.appspot.com",
  messagingSenderId: "218384812634",
  appId: "1:218384812634:web:f23ea0d79755d507b66663",
  measurementId: "G-82K5KTYFJ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent, FeedbackModalComponent, SettingsPopoverComponent],
  entryComponents: [FeedbackModalComponent, SettingsPopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    File,
    FilePath,
    SpeechRecognition,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
