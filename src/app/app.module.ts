import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

const config = {
  apiKey: 'AIzaSyABUIIRoqye4h82omWkSb9Gios7oi6Xo4M',
  authDomain: 'angularelementpoll.firebaseapp.com',
  databaseURL: 'https://angularelementpoll.firebaseio.com',
  projectId: 'angularelementpoll',
  storageBucket: 'angularelementpoll.appspot.com',
  messagingSenderId: '685846252400',
  appId: '1:685846252400:web:5cc3463cb3d0298d665db5',
  measurementId: 'G-ZGKJ7HTL2M'
};

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UserpollComponent } from './userpoll/userpoll.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpollComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [UserpollComponent]
})
export class AppModule {
  constructor(public injector: Injector) {}

  ngDoBootstrap() {
    const e1 = createCustomElement(UserpollComponent, { injector: this.injector });

    customElements.define('user-poll', e1);
  }

}
