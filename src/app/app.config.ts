import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"edzeeta-certification","appId":"1:389921084048:web:64bd90334f47104ae7be15","storageBucket":"edzeeta-certification.appspot.com","apiKey":"AIzaSyDpku5wPzt_XsFSWlbt2F20FlVdUWuP1kE","authDomain":"edzeeta-certification.firebaseapp.com","messagingSenderId":"389921084048","measurementId":"G-5YTMBJQ92Y"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideStorage(() => getStorage()))]
};
