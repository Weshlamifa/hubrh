
import { Component, Injectable } from '@angular/core';
import { FullTextSearchService } from '../services/full-text-search.service'

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css', './navigationbar.component.css']
})

@Injectable()
export class CollaborateursComponent {
  //barre de recherche
  data = '';
  // resultat de la requete
  res: any[];

  editField: string;
    personList: Array<any> = [
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

    constructor(private fullTextSearchService: FullTextSearchService) {}


    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    remove(id: any) {
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

    add(name: string, firstname:string, email:string, date:string, prestataire:boolean, role:string, statut:string, linkcv: string, comments:string) {
        const person = {id:this.personList.length+1, name:name, firstname:firstname, email:email, date:date, prestataire:prestataire, role:role, statut:statut, linkcv:linkcv, comments:comments};
        this.personList.push(person);
        console.log(this.personList);
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }

    change() {
    // requete http sur la bdd
    console.log(this.data);
    this.res = this.fullTextSearchService.transform(this.data, this.personList);
    console.log(this.res);
  }

  lexicographicalSorting(attToSort: string){
    console.log('TEST mg');
    console.log('Loret'<'Loret');
    this.personList.sort();
  }

  bubbleSort(): number[] {
    this.personList = this.personList.slice(); // creates a copy of the array

    for(let i = 0; i < this.personList.length; i++) {
        for(let j = 0; j < this.personList.length - 1; j++) {

            if(this.personList[j].name > this.personList[j + 1].name) {
                let swap = this.personList[j];
                this.personList[j] = this.personList[j + 1];
                this.personList[j + 1] = swap;
            }
        }
    }
    return array;
}
}
