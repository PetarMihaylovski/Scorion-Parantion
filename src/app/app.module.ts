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
@NgModule({
  declarations: [AppComponent, FeedbackModalComponent, SettingsPopoverComponent],
  entryComponents: [FeedbackModalComponent, SettingsPopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
