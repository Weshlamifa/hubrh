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

  ngOnInit() {
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', [Validators.required, Validators.email]),
      contactFormModalFirstName: new FormControl('', Validators.required),
      //contactFormModalSubject: new FormControl('', Validators.required),
     // contactFormModalMessage: new FormControl('', Validators.required)
    });
  }

  constructor(private collaborateurs: CollaborateursComponent) { }

  onSubmit(form: FormGroup ) {
    const name = this.contactFormModalName.value;
    const firstname = this.contactFormModalFirstName.value;
    const email = this.contactFormModalEmail.value;
    this.collaborateurs.add(name, firstname, email);
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

  get contactFormModalSubject() {
    return this.validatingForm.get('contactFormModalSubject');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }
}

