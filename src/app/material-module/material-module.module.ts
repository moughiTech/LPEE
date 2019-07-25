import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModuleModule { }
