import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  backend = 'http://localhost:8080';

  constructor(private _http: HttpClient) { }
  

  postUser(registerValues:User):Observable<any>{
    return this._http.post(`${this.backend}/register`, registerValues);
  }

  postLogin(loginUser:User):Observable<any>{
    return this._http.post(`${this.backend}/login`, loginUser);
  }


}
