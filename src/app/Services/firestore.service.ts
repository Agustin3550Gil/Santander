import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import User from '../Interface/Interface';
// import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore/lite'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore,

  ) { }



    addUser(user: User){

      const refUser = collection(this.firestore, 'users');
      return addDoc(refUser, user)
    }

}
