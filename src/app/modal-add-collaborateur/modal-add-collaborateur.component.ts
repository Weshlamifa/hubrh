import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CollaborateursComponent } from '../collaborateurs/collaborateurs.component';
import { ServerConnectionService } from '../services/server-connection.service'; // conenction http avec le serveur
import { Collaborator } from '../classes/collaborater';
@Component({
  selector: 'app-modal-add-collaborateur',
  templateUrl: './modal-add-collaborateur.component.html',
  styleUrls: ['./modal-add-collaborateur.component.css']
})

@Injectable()
export class ModalAddCollaborateurComponent implements OnInit {

  validatingForm: FormGroup;
  prestataire: boolean = false;  

  /** A l'initialisation du formulaire, les variables sont mises à null sauf le prestaire. 
   * En effet, c'est une checkbox qui est initialisée à false par défaut.
   */

  ngOnInit() {
    this.prestataire = false; 
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', [Validators.required, Validators.email]),
      contactFormModalFirstName: new FormControl('', Validators.required),
      contactFormModalDate: new FormControl('', Validators.required),
      contactFormModalPrestataire: new FormControl(false, Validators.required),
      contactFormModalRole: new FormControl('', Validators.required),
      contactFormModalStatut: new FormControl('', Validators.required),
      contactFormModalLinkCV: new FormControl(''),
      contactFormModalPhoto: new FormControl(''),
      contactFormModalComments: new FormControl('')
    });

    
  }

  constructor(private collaborateurs: CollaborateursComponent,  private serverConnectionService: ServerConnectionService) {this.prestataire = false;  }

  /** Quand on valide le formulaire */

  onSubmit(form: FormGroup ) {
    
      const name = this.contactFormModalName.value;
      const firstname = this.contactFormModalFirstName.value;
      const email = this.contactFormModalEmail.value;
      const date = this.contactFormModalDate.value;
      this.prestataire = this.contactFormModalPrestataire.value;
      this.prestataire = this.contactFormModalPrestataire.value;
      const role = this.contactFormModalRole.value;
      const statut = this.contactFormModalStatut.value;
      const linkcv = this.contactFormModalLinkCV.value;
      const photo = this.contactFormModalPhoto.value;
      const comments = this.contactFormModalComments.value;
      this.collaborateurs.add(name, firstname, email, date ,this.prestataire, role, statut, linkcv, comments);
      if(!this.collaborateurs.typeSorted && this.collaborateurs.typeSortedFN) {
        this.collaborateurs.lexicographicalSortingFirstName();
      }
      else if(this.collaborateurs.typeSorted && !this.collaborateurs.typeSortedFN && !this.collaborateurs.notSortedYet) {
         this.collaborateurs.lexicographicalSortingName();
      } // c'est bon
      else if(!this.collaborateurs.typeSorted && this.collaborateurs.typeSortedFN && !this.collaborateurs.notSortedYet) {
         this.collaborateurs.lexicographicalSortingName();
      }
      else if(!this.collaborateurs.typeSorted && !this.collaborateurs.typeSortedFN && !this.collaborateurs.notSortedYet) {
        this.collaborateurs.antiLexicographicalSortingName();
      }
      else if(!this.collaborateurs.typeSorted  && !this.collaborateurs.typeSortedFN && this.collaborateurs.notSortedYet) {}
      this.validatingForm.reset(); 
      this.serverConnectionService.insertRequest( new Collaborator(1,name ,firstname , email, comments,linkcv, this.prestataire,date,date, 20,false, 0))
    .subscribe(() => "");
  }

  /** Quand on ferme le formulaire sans valider. Clic sur la croix ou le bouton annuler. Tous les champs
   * sont réinitialisés. Les champs Role et Statut sont remis dans leur état d'origine avec "Veuillez sélectionner un ..."
  */

  onClose() {
    this.validatingForm.reset();
    this.contactFormModalRole.setValue('');
    this.contactFormModalStatut.setValue('');
    }

  /** Getters pour récupérer les valeurs mises dans le formulaire */

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

