import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DescriptionsService {

  backend = 'https://app-voyage-back.onrender.com';
  // backend = `${environment.API_URL}`;

  
  constructor(private _http: HttpClient) { }


  
  // -----------------------------CRUD DES DESCRIPTIONS DE LISTS (TACHES)------------------------------------------------

  /** Cette méthode permet de créer une description dans une liste
   * @param  {number} id
   * @param  {any} description
   * @returns Observable
   */
  postDesc(id: number, description: any): Observable<any> {
    return this._http.post(`${this.backend}/detail/` + id, description);
  }


  /** Cette méthode permet de récupérer tous les détails d'une liste
   * @param  {number} id
   * @returns Observable
   */
  getAllDescOneList(id: number): Observable<any> {
    return this._http.get(`${this.backend}/detail/` + id);
  }


  /** Cette méthode permet de récupérer/d'afficher un seul détail d'une liste 
   * @param  {number} id
   * @returns Observable
   */
  getOneDescOneList(id: number): Observable<any> {
    return this._http.get(`${this.backend}/onedetail/` + id);
  }


  /** Cette méthode permet, à l'utilisateur de modifier un détail de sa liste
   * @param  {number} id // id du detail
   * @param  {any} description
   * @returns Observable
   */
  putDesc(description:any, id: number): Observable<any> {
    return this._http.put(`${this.backend}/detail/` + id, description);
  }


  /** Cette méthode permet, à l'utilisateur de supprimer une description/un détail de la liste.
   * @param  {number} id // id du detail
   * @returns Observable
   */
  deleteOneDesc(id: number): Observable<any> {
    return this._http.delete(`${this.backend}/detail/` + id);
  }
  
  /** Cette méthode permet, à l'utilisateur de supprimer toutes les descriptions pour supprimer la liste
   * @param  {number} id // id de la liste et non du detail
   * @returns Observable
   */
  deleteAllDesc(id: number): Observable<any> {
    return this._http.delete(`${this.backend}/alldetail/` + id);
  }
  

}
