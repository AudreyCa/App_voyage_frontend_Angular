import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  // backend = 'https://app-voyage-back.onrender.com';
  backend = `${environment.API_URL}`;

  
  constructor(private _http: HttpClient) { }


  
  // -----------------------------CRUD DU USER------------------------------------------------

  /** Cette méthode permet d'enregistrer, dans la BDD, les données du nouvel utilisateur qui crée son profil.
   * @param  {User} registerValues
   * @returns Observable de type any
   */
  postUser(registerValues: User): Observable<any> {
    return this._http.post(`${this.backend}/register`, registerValues);
  }

  /** Cette méthode permet de vérifier si le mdp et le mail de l'utilisateur sont bons et d'obtenir un token si c'est bon.
   * @param  {User} loginUser
   * @returns Observable
   */
  postLogin(loginUser: User): Observable<any> {
    return this._http.post(`${this.backend}/login`, loginUser);
  }

  /** Cette méthode permet de récupérer le token stocké dans le localstorage pour l'auth.interceptor
   */
  getToken() {
    return localStorage.getItem('token')
  }

  /** Cette méthode permet de récupérer les données de l'utilisateur afin de les afficher ou de juste récupérer l'id.
   * @returns Observable
   */
  getUser(): Observable<any> {
    return this._http.get(`${this.backend}/user`);
  }

  /** Cette méthode permet, à l'utilisateur de modifier ces informations.
   * @param  {number} id
   * @param  {User} updateDataUser
   * @returns Observable
   */
  putUser(id: number, updateDataUser: User): Observable<any> {
    return this._http.put(`${this.backend}/user/` + id, updateDataUser);
  }

  /** Cette méthode permet, à l'utilisateur de supprimer son profil.
   * @param  {number} id
   * @returns Observable
   */
  deleteUser(id: number): Observable<any> {
    return this._http.delete(`${this.backend}/user/` + id);
  }

}
