import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


const appRoutes: Routes = [
  { path: 'collaborateurs', component: CollaborateursComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CollaborateursComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
