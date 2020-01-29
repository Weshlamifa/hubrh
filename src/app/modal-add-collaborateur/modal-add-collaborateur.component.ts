import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CollaborateursComponent } from '../collaborateurs/collaborateurs.component';

@Component({
  selector: 'app-modal-add-collaborateur',
  templateUrl: './modal-add-collaborateur.component.html',
  styleUrls: ['./modal-add-collaborateur.component.css']
})
export class ModalAddCollaborateurComponent implements OnInit {

  validatingForm: FormGroup;
  prestataire: boolean = false;  
  ngOnInit() {
    this.prestataire = false; 
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', [Validators.required, Validators.email]),
      contactFormModalFirstName: new FormControl('', Validators.required),
      contactFormModalDate: new FormControl('', Validators.required),
      contactFormModalPrestataire: new FormControl('', Validators.required),
      contactFormModalRole: new FormControl('', Validators.required),
      contactFormModalStatut: new FormControl('', Validators.required),
      contactFormModalLinkCV: new FormControl(''),
      contactFormModalPhoto: new FormControl(''),
      contactFormModalComments: new FormControl('')
    });
  }

  constructor(private collaborateurs: CollaborateursComponent) {this.prestataire = false;  }

  onSubmit(form: FormGroup ) {
    
      const name = this.contactFormModalName.value;
      const firstname = this.contactFormModalFirstName.value;
      const email = this.contactFormModalEmail.value;
      const date = this.contactFormModalDate.value;
      if(this.prestataire != null) {
        this.prestataire = this.contactFormModalPrestataire.value;
      }
      const role = this.contactFormModalRole.value;
      const statut = this.contactFormModalStatut.value;
      const linkcv = this.contactFormModalLinkCV.value;
      const photo = this.contactFormModalPhoto.value;
      const comments = this.contactFormModalComments.value;
      this.collaborateurs.add(name, firstname, email, date ,this.prestataire, role, statut, linkcv, comments);
      this.validatingForm.reset();
    
  }

  onClose() {
    this.validatingForm.reset();
  }

  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }

  get contactFormModalFirstName() {
    return this.validatingForm.get('contactFormModalFirstName');
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalDate() {
    return this.validatingForm.get('contactFormModalDate');
  }

  get contactFormModalPrestataire() {
    return this.validatingForm.get('contactFormModalPrestataire');
  }

  get contactFormModalRole() {
    return this.validatingForm.get('contactFormModalRole');
  }

  get contactFormModalStatut() {
    return this.validatingForm.get('contactFormModalStatut');
  }

  get contactFormModalLinkCV() {
    return this.validatingForm.get('contactFormModalLinkCV');
  }

  get contactFormModalPhoto() {
    return this.validatingForm.get('contactFormModalPhoto');
  }

  get contactFormModalComments() {
    return this.validatingForm.get('contactFormModalComments');
  }

  
}

