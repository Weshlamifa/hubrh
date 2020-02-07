import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborator } from '../classes/collaborater';

@Injectable({providedIn: 'root'})

export class ServerConnectionService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/collaborateurs');
  }

  insertRequest(collaborator: Collaborator): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/collaborateurs/insertRequest', collaborator);
  }

  updateRequest(collaborator: Collaborator): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/collaborateurs/updateRequest', collaborator);
  }
}