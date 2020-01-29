
import { Component, Injectable } from '@angular/core';
import { FullTextSearchService } from '../services/full-text-search.service'

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css', './navigationbar.component.css']
})

@Injectable()
export class CollaborateursComponent {
  data = ''; //texte barre de recherche
  res: any[]; // resultat de la requete barre de recherche

  typeSorted:boolean =false; // retourne vrai les noms sont triés par ordre lexicographique
  typeSortedFN: boolean = false; // retourne vrai les prénoms sont triés par ordre lexicographique
  editField: string;
  
  personList: Array<any> = [ // données de test à afficher dans le tableau des collaborateurs
    { id: 1, name: 'LORET', firstname: 'Alexis', email: 'alexis.loret@bidule.fr', isDelete: false },
    { id: 2, name: 'QUESTEL', firstname: 'Louis', email: 'louis.questel@bidule.fr', isDelete: false },
    { id: 3, name: 'radeau', firstname: 'Prenom', email: 'prenom.melo@bidule.fr', isDelete: false },
    { id: 4, name: 'baetau', firstname: 'Alexis', email: 'alexis.loret@bidule.fr', isDelete: false },
    { id: 5, name: 'melio', firstname: 'Louis', email: 'louis.questel@bidule.fr', isDelete: false },
    { id: 6, name: 'scroll', firstname: 'Prenom', email: 'prenom.melo@bidule.fr', isDelete: false  },
    { id: 7, name: 'ami', firstname: 'Alexis', email: 'alexis.loret@bidule.fr', isDelete: false },
    { id: 8, name: 'beti', firstname: 'Louis', email: 'louis.questel@bidule.fr', isDelete: false },
    { id: 9, name: 'sami', firstname: 'Prenom', email: 'prenom.melo@bidule.fr', isDelete: false },
    { id: 10, name: '1', firstname: 'Alexis', email: 'alexis.loret@bidule.fr', isDelete: false },
    { id: 11, name: '2', firstname: 'Louis', email: 'louis.questel@bidule.fr', isDelete: false },
    { id: 12, name: '3', firstname: 'Prenom', email: 'prenom.melo@bidule.fr', isDelete: false },
    { id: 13, name: '7', firstname: 'Alexis', email: 'alexis.loret@bidule.fr', isDelete: false },
    { id: 20, name: '5', firstname: 'Louis', email: 'louis.questel@bidule.fr', isDelete: false },
    { id: 15, name: '8', firstname: 'Prenom', email: 'prenom.melo@bidule.fr', isDelete: false }
  ];

    constructor(private fullTextSearchService: FullTextSearchService) {} // injection du service FullTextSearchService utilisé pour la barre de recherche

    remove(id: any) { // le collaborateur remove passe en rouge, puis actualisation de l'affichage
      var i = 0;
      for (let person of this.personList) {
        if ( person.id === id ) {
          //this.personList.splice(i,1);
          person.isDelete = true;
          break;
        }
        i++;
      }
      if (this.data !== '') {
        this.change();
      }
      console.log(id);
    }

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    // ajoute un collaborateur dans la liste personList
    add(name: string, firstname:string, email:string, date:string, prestataire:boolean, role:string, statut:string, linkcv: string, comments:string) {
        const person = {id:this.personList.length+1, name:name, firstname:firstname, email:email, date:date, prestataire:prestataire, role:role, statut:statut, linkcv:linkcv, comments:comments};
        this.personList.push(person);
        console.log(this.personList);
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }

    // Actualise l'affichage du tableau des "res" qui contient le résultat d'un recherche
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
  }
  // tri de la colonne name par ordre antilexicographique
  antiLexicographicalSortingName() {
    this.bubbleAntiSortName();
    if (this.data !== '') {
        this.change();
      }
      this.typeSorted = false;
  }

  // tri de la colonne firstname par ordre lexicographique
  lexicographicalSortingFirstName() {
    this.bubbleSortFirstName();
    if (this.data !== '') {
        this.change();
      }
      this.typeSortedFN = true;
  }
  // tri de la colonne firstname par ordre antilexicographique
  antiLexicographicalSortingFirstName() {
    this.bubbleAntiSortFirstName();
    if (this.data !== '') {
        this.change();
      }
      this.typeSortedFN = false;
  }

  // tri bubble sort du "name" par ordre lexicographique
  bubbleSortName() {
    for(let i = 0; i < this.personList.length; i++) {
        for(let j = 0; j < this.personList.length - 1; j++) {

            if(this.personList[j].name.toUpperCase() > this.personList[j + 1].name.toUpperCase()) {
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
    for(let i = 0; i < this.personList.length; i++) {
        for(let j = 0; j < this.personList.length - 1; j++) {

            if(this.personList[j].firstname.toUpperCase() > this.personList[j + 1].firstname.toUpperCase()) {
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
    for(let i = 0; i < this.personList.length; i++) {
        for(let j = 0; j < this.personList.length - 1; j++) {

            if(this.personList[j].name.toUpperCase() < this.personList[j + 1].name.toUpperCase()) {
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
    for(let i = 0; i < this.personList.length; i++) {
        for(let j = 0; j < this.personList.length - 1; j++) {

            if(this.personList[j].firstname.toUpperCase() < this.personList[j + 1].firstname.toUpperCase()) {
                let swap = this.personList[j];
                this.personList[j] = this.personList[j + 1];
                this.personList[j + 1] = swap;
            }
        }
    }
    return this.personList;
  }
}
