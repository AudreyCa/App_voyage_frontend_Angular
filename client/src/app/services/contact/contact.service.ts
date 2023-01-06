import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  backend = `${environment.API_URL}`;

  constructor(private _http: HttpClient) { }

  postMsg(msg:any): Observable<any> {
    return this._http.post(`${this.backend}`, msg);
  }

}
