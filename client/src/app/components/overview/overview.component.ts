import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  showMenu = false;
  idProfil = document.getElementById('profil');

  // Les attributs liés aux EventEmitter du component side-bar-right, p our afficher les titre ajustés :
  titreList!:string;
  titreProfil!:string;
  titreContact!:string;

  constructor(private _route: Router) { }
  
  ngOnInit(): void {}


  onShowTitleList(value:string) {
    this.titreList = value;
    this.titreProfil = "";
    this.titreContact = "";
  }

  onShowTitleProfil(value:string) {
    this.titreProfil = value;
    this.titreList = "";
    this.titreContact = "";
  }

  onShowTitleContact(value:string) {
    this.titreContact = value;
    this.titreList = "";
    this.titreProfil = "";
  }

  onLogOut () {
    localStorage.clear()
    this._route.navigate(['/login'])
  }

}
