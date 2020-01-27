import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTableDataSource } from '../collaborateurs/data-table-datasource';

@Component({
  selector: 'app-modal-add-collaborateur',
  templateUrl: './modal-add-collaborateur.component.html',
  styleUrls: ['./modal-add-collaborateur.component.css']
})
export class ModalAddCollaborateurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalAddCollaborateurComponent>, private collaborateursService: DataTableDataSource) { }

  ngOnInit() {
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    alert("You have logged out.");
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    const nom = form.value['nom'];
    const prenom = form.value['prenom'];
    const email = form.value['email'];
    this.collaborateursService.addCollaborateur(nom, prenom, email);
    this.closeModal();
  }
}
