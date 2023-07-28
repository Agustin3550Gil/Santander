import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TokenComponent } from '../token/token/token.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'part2',
    component: TokenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
