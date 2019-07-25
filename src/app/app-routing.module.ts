import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CalculComponent} from './calcul/calcul.component';


const routes: Routes = [
  {
    path : 'accueil',
    component : HomeComponent,
  },
  {
    path : 'calcul',
    component : CalculComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
