import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialog, MatDialogModule, MatPaginator, MatDialogContainer } from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';
import { ModalAddCollaborateurComponent } from './modal-add-collaborateur/modal-add-collaborateur.component';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableDataSource } from './collaborateurs/data-table-datasource';

const appRoutes: Routes = [
  { path: 'collaborateurs', component: CollaborateursComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CollaborateursComponent,
    HeaderComponent,
    ModalAddCollaborateurComponent
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
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataTableDataSource, MatPaginator],
  bootstrap: [AppComponent],

  entryComponents: [ModalAddCollaborateurComponent]
})
export class AppModule { }
