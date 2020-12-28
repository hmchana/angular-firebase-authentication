import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCkYWeuJrdMQSkm54esXM-nszB0Nqx45gg',
      authDomain: 'fir-angular-auth-e648d.firebaseapp.com',
      projectId: 'fir-angular-auth-e648d',
      storageBucket: 'fir-angular-auth-e648d.appspot.com',
      messagingSenderId: '761000405990',
      appId: '1:761000405990:web:3be4640908838dfab88427',
    }),
    AppRoutingModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
