import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Links } from './interfaces/links';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly linkUrl = 'assets/links.json'
  
  constructor(private http:HttpClient) { 

  }

  getLinks(): Observable<Links[]> {
    return this.http.get<Links[]>(this.linkUrl);
  }


}
