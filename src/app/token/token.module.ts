import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token/token.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TokenComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule, 
  ],
  exports: [
    TokenComponent
  ]
})
export class TokenModule { }
