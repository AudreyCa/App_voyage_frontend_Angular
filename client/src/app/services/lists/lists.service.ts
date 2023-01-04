import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  // backend = 'http://localhost:8080';
  backend = 'https://app-voyage-back.onrender.com';

  
  constructor(private _http: HttpClient) { }


  
  // ----------------------------- CRUD DES LISTS ----------------------------------------

  /** Cette méthode permet, à un utilisateur de créer une liste (en lui donnant un titre).
   * @param  {number} id
   * @param  {any} newList
   * @returns Observable
   */
  postList(id: number, newList: any): Observable<any> {
    return this._http.post(`${this.backend}/list/` + id, newList);
  }


  /** Cette méthode permet de récupérer toutes les listes (et donc les titres inclus) d'un utilisateur
   * @param  {number} id
   * @returns Observable
   */
  getAllListsOneUser(id: any): Observable<any> {
    return this._http.get(`${this.backend}/list/` + id);
  }


  /** Cette méthode permet de récupérer/d'afficher une seule liste d'un user 
   * @param  {number} id
   * @returns Observable
   */
  getOneListOneUser(id: number): Observable<any> {
    return this._http.get(`${this.backend}/onelist/` + id);
  }


  /** Cette méthode permet, à l'utilisateur de modifier le titre de sa liste.
   * @param  {number} id
   * @param  {any} newList
   * @returns Observable
   */
  putList(newList: any, id: number): Observable<any> {
    return this._http.put(`${this.backend}/list/` + id, newList);
  }


  /** Cette méthode permet, à l'utilisateur de supprimer sa liste.
   * @param  {number} id //  celui de la liste
   * @returns Observable
   */
  deleteList(id: number): Observable<any> {
    return this._http.delete(`${this.backend}/list/` + id);
  }

    /** Cette méthode permet de supprimer toutes les listes pour supprimer l'utilisateur.
   * @param  {number} id //  celui de l'utilisateur
   * @returns Observable
   */
    deleteAllList(id: number): Observable<any> {
      return this._http.delete(`${this.backend}/lists/` + id);
    }

}
