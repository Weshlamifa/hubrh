
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
      { id: 1, name: 'LORET', firstname: 'Alexis', email: 'alexis.loret@bidule.fr' },
      { id: 2, name: 'QUESTEL', firstname: 'Louis', email: 'louis.questel@bidule.fr' },
      { id: 3, name: 'MELO', firstname: 'Prenom', email: 'prenom.melo@bidule.fr' }
    ];

    constructor(private fullTextSearchService: FullTextSearchService) {}


    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    remove(id: any) {
      this.personList.splice(id, 1);
    }

    add(name: string, firstname:string, email:string) {
        let last:any = this.personList[this.personList.length-1];
        const person = {id:last, name:name, firstname:firstname, email:email};
        this.personList.push(person);
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
}
