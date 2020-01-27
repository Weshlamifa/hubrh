
import { Component, Input,  OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css']
})
export class CollaborateursComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static : true}) sort: MatSort;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nom', 'prenom', 'email'];

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.paginator, this.sort);
  }
}