
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
      var i = 0;
      for (let person of this.personList) {
        if ( person.id === id ) {
          this.personList.splice(i,1);
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
}
