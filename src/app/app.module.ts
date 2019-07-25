import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModuleModule} from './material-module/material-module.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule, MatSidenavModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CalculComponent } from './calcul/calcul.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
