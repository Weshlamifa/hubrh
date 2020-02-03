import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	API_KEY = '0e9382f40ade4198a59709478e32b3ea';
  constructor(private httpClient: HttpClient) { }
}