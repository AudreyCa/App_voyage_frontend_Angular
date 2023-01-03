import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.scss']
})
export class SideBarRightComponent  implements OnInit {

  @Output()titreList = new EventEmitter<string>();
  @Output()titreProfil = new EventEmitter<string>();
  @Output()titreContact = new EventEmitter<string>();

  constructor(private _route: Router) { }

  ngOnInit(): void { }

  onLogOut () {
    localStorage.clear()
    this._route.navigate(['/login'])
  }

  onSendTitleList() {
    this.titreList.emit('Mes listes')
  }

  onSendTitleProfil() {
    this.titreProfil.emit('Mon profil')
  }

  onSendTitleContact() {
    this.titreProfil.emit('Mon contact')
  }

}

