import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MobileAuthService } from '../services/auth/mobile-auth.service';
import { SpaAuthService } from '../services/auth/spa-auth.service';
import { AuthFactoryService } from '../services/auth/auth.factory.service';

import { HomePage } from '../pages/home/home';

// This import is part of "Set Up Auth0-Cordova"
import Auth0Cordova from '@auth0/cordova';

import * as myGlobals from '../globals.ts';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  auth: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, authFactoryService: AuthFactoryService) {

    this.auth = authFactoryService.getInstance();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // This function is part of "Set Up Auth0-Cordova"
      (<any>window).handleOpenURL = (url) => {
        Auth0Cordova.onRedirectUri(url);
      };

      if(!myGlobals.mobile) {
        this.auth.handleAuthentication();
      }

    });
  }
}


