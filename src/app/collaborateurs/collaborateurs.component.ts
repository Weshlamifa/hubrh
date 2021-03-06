
import { Component, Injectable, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FullTextSearchService } from '../services/full-text-search.service'
import { ServerConnectionService } from '../services/server-connection.service'; // conenction http avec le serveur
import { Collaborator } from '../classes/collaborater';

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css', './navigationbar.component.css', './switch.css']
})

@Injectable()
export class CollaborateursComponent implements OnInit {


  data = ''; //texte barre de recherche
  res: Array<any>[]; // resultat de la requete barre de recherche
  showDeleted: boolean;

  typeSorted: boolean = null; // retourne vrai les noms sont tri�s par ordre lexicographique
  typeSortedFN: boolean = null; // retourne vrai les pr�noms sont tri�s par ordre lexicographique
  notSortedYet: boolean = true;

  public editField: string;
  public personList: Array<any>;
  public statusList: Array<any>; // list de tous les status possibles
  public roleList: Array<any>; // list de tous les roles disponibles

  constructor(private fullTextSearchService: FullTextSearchService, private serverConnectionService: ServerConnectionService) {
    this.showDeleted = false;
  } // injection du service FullTextSearchService utilis� pour la barre de recherche

  ngOnInit() {
    this.serverConnectionService.getAll().subscribe(data => {
      console.log(this.personList = data);
    });
    this.serverConnectionService.getAllStatus().subscribe(data => {
      console.log(this.statusList = data);
    });
    this.serverConnectionService.getAllRoles().subscribe(data => {
      console.log(this.roleList = data);
    });
  }


  changeShowDeleted() {
    if (this.showDeleted) {
      this.showDeleted = false;
    }
    else {
      this.showDeleted = true;
    }
  }

  remove(id: any) { // le collaborateur remove passe en rouge, puis actualisation de l'affichage
    var i = 0;
    for (let person of this.personList) {
      if (person.id === id) {
        person.deleted = true;
        this.serverConnectionService.updateRequest(new Collaborator(person.id, person.name, person.firstname, person.email, person.comment,
          person.cv, /*person.prestataire*/ true, person.arrivalDateOp, person.leftDateOp, person.fkIdStatus, person.deleted, person.fkIdRole)).subscribe(() => "");
        break;
      }
      i++;
    }
    if (this.data !== '') {
      this.change();
    }
    console.log(id);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  refreshData(){
    this.serverConnectionService.getAll().subscribe(data => {
      console.log(this.personList = data);
    });
  }

  // ajoute un collaborateur dans la liste personList
  add(name: string, firstname: string, email: string, date: string, prestataire: boolean, role: string, statut: string, linkcv: string, comments: string) {
    const person = { id: this.personList.length + 1, name: name, firstname: firstname, email: email, deleted: false, date: date, prestataire: prestataire, role: role, statut: statut, linkcv: linkcv, comments: comments };
    this.personList.push(person);
  }

  // Actualise l'affichage du tableau des "res" qui contient le r�sultat d'un recherche
  change() {
    this.res = this.fullTextSearchService.transform(this.data, this.personList);
  }

  // tri de la colonne name par ordre lexicographique
  lexicographicalSortingName() {
    this.bubbleSortName();
    if (this.data !== '') {
      this.change();
    }
    this.typeSorted = true;
    this.typeSortedFN = false;
    this.notSortedYet = false;
    console.log("typeSorted : " + this.typeSorted);
    console.log("typeSortedFN : " + this.typeSortedFN);
    console.log("notSortedYet : " + this.notSortedYet);
  }
  // tri de la colonne name par ordre antilexicographique
  antiLexicographicalSortingName() {
    this.bubbleAntiSortName();
    if (this.data !== '') {
      this.change();
    }
    this.typeSorted = false;
    this.typeSortedFN = false;
    this.notSortedYet = false;
    console.log("typeSorted : " + this.typeSorted);
    console.log("typeSortedFN : " + this.typeSortedFN);
    console.log("notSortedYet : " + this.notSortedYet);
  }

  // tri de la colonne firstname par ordre lexicographique
  lexicographicalSortingFirstName() {
    this.bubbleSortFirstName();
    if (this.data !== '') {
      this.change();
    }
    this.typeSortedFN = true;
    this.typeSorted = false;
    this.notSortedYet = false;
    console.log("typeSorted : " + this.typeSorted);
    console.log("typeSortedFN : " + this.typeSortedFN);
    console.log("notSortedYet : " + this.notSortedYet);
  }
  // tri de la colonne firstname par ordre antilexicographique
  antiLexicographicalSortingFirstName() {
    this.bubbleAntiSortFirstName();
    if (this.data !== '') {
      this.change();
    }
    this.typeSortedFN = false;
    this.typeSorted = false;
    this.notSortedYet = false;
    console.log("typeSorted : " + this.typeSorted);
    console.log("typeSortedFN : " + this.typeSortedFN);
    console.log("notSortedYet : " + this.notSortedYet);
  }

  // tri bubble sort du "name" par ordre lexicographique
  bubbleSortName() {
    for (let i = 0; i < this.personList.length; i++) {
      for (let j = 0; j < this.personList.length - 1; j++) {

        if (this.personList[j].name.toUpperCase() > this.personList[j + 1].name.toUpperCase()) {
          let swap = this.personList[j];
          this.personList[j] = this.personList[j + 1];
          this.personList[j + 1] = swap;
        }
      }
    }
    return this.personList;
  }

  // tri bubble sort du "firstname" par ordre lexicographique
  bubbleSortFirstName() {
    for (let i = 0; i < this.personList.length; i++) {
      for (let j = 0; j < this.personList.length - 1; j++) {

        if (this.personList[j].firstname.toUpperCase() > this.personList[j + 1].firstname.toUpperCase()) {
          let swap = this.personList[j];
          this.personList[j] = this.personList[j + 1];
          this.personList[j + 1] = swap;
        }
      }
    }
    return this.personList;
  }

  // tri bubble sort du "name" par ordre antilexicographique
  bubbleAntiSortName() {
    for (let i = 0; i < this.personList.length; i++) {
      for (let j = 0; j < this.personList.length - 1; j++) {

        if (this.personList[j].name.toUpperCase() < this.personList[j + 1].name.toUpperCase()) {
          let swap = this.personList[j];
          this.personList[j] = this.personList[j + 1];
          this.personList[j + 1] = swap;
        }
      }
    }
    return this.personList;
  }

  // tri bubble sort du "firstname" par ordre antilexicographique
  bubbleAntiSortFirstName() {
    for (let i = 0; i < this.personList.length; i++) {
      for (let j = 0; j < this.personList.length - 1; j++) {

        if (this.personList[j].firstname.toUpperCase() < this.personList[j + 1].firstname.toUpperCase()) {
          let swap = this.personList[j];
          this.personList[j] = this.personList[j + 1];
          this.personList[j + 1] = swap;
        }
      }
    }
    return this.personList;
  }
}
