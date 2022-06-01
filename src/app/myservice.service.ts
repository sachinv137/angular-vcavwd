import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyserviceService {
url="https://jsonplaceholder.typicode.com/users";
  constructor(private _http:HttpClient) { 
    
  }

  getdetails():Observable<any>{
    return this._http.get(this.url);
  }

}