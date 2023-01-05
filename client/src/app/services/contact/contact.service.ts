import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  backendContact = 'https://app-voyage-back.onrender.com';
  // backendContact = `${environment.API_URL}`;

  constructor(private _http: HttpClient) { }

  postMsg(msg:any): Observable<any> {
    return this._http.post(this.backendContact, msg);
  }

}
