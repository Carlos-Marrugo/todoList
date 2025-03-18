import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';
import { provideFirebaseApp, } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';



@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule
  ],

})
export class CoreModule { }

function getFirestore(): import("@firebase/app").FirebaseApp {
  throw new Error('Function not implemented.');
}
