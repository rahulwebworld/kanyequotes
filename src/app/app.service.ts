import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class QuotesService {
    url : any ="https://api.kanye.rest/";
  
    constructor(public http: HttpClient) { }
  
    getQuotes(): Observable<any>{
        return  this.http.get(this.url);
        
      }
  
  }