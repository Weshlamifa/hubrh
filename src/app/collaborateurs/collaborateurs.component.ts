
import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css']
})
export class CollaborateursComponent implements OnInit {

  @Input() nom: string;
  @Input() prenom: string;
  @Input() email: string;
  
  constructor() { }

  ngOnInit() {
  }

}
