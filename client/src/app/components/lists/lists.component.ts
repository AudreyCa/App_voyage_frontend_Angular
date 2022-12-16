import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-user/data-user.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  dataUserId!: number; // Pour récupérer l'id de l'utilisateur (pour les services).

  constructor( private _dataBack: DataService ) { }

  ngOnInit(): void {
    this._dataBack.getUser().subscribe((response: any) => {
      console.log('data du user envoyé du backend: ' + JSON.stringify({ data: response[0] }))
      this.dataUserId = response[0].user_id
      console.log('ici dataUserId : ', this.dataUserId);
    })
  }

}
