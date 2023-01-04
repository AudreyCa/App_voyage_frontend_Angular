import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // backendContact = 'http://localhost:8080/contact';
  backendContact = 'https://app-voyage-back.onrender.com';

  constructor(private _http: HttpClient) { }

  postMsg(msg:any): Observable<any> {
    return this._http.post(this.backendContact, msg);
  }

}
