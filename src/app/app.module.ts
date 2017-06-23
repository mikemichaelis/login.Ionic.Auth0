import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// This import is part of "Creating an Authentication Service"
import { SpaAuthService } from '../services/auth/spa-auth.service';
import { MobileAuthService } from '../services/auth/mobile-auth.service';
import { AuthFactoryService } from '../services/auth/auth.factory.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // This service is part of "Adding an Authentication Service"
    SpaAuthService,
    MobileAuthService,
    AuthFactoryService
  ]
})
export class AppModule {}
