import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token/token.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';



@NgModule({
  declarations: [TokenComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    TokenComponent
  ]
})
export class TokenModule { }
