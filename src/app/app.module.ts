import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule } from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';


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
    LayoutModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
