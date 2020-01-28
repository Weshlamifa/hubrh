
import { Component, Input,  OnInit, ViewChild, SystemJsNgModuleLoader, ElementRef, Injectable } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css', './navigationbar.component.css']
})

@Injectable()
export class CollaborateursComponent {

  editField: string;
    personList: Array<any> = [
      { id: 1, name: 'LORET', firstname: 'Alexis', email: 'alexis.loret@bidule.fr' },
      { id: 2, name: 'QUESTEL', firstname: 'Louis', email: 'louis.questel@bidule.fr' },
      { id: 3, name: 'MELO', firstname: 'Prenom', email: 'prenom.melo@bidule.fr' }
    ];

    

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
}
