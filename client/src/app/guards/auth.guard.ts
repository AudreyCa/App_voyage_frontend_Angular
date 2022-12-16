import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data-user/data-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  private _dataBack: DataService,
    private _snackBar: MatSnackBar,
    private _router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this._dataBack.getToken()
      if (token) {
        return true
      } else {
        this._snackBar.open('Vous n\'avez pas accès à la page', 'ok')
        return this._router.navigate(['login'])
      }
  }
  
}
