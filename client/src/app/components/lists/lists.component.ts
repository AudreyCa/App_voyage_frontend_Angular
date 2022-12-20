import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddListModaleComponent } from 'src/app/modals/add-list-modale/add-list-modale.component';
import { ModifListModaleComponent } from 'src/app/modals/modif-list-modale/modif-list-modale.component';
import { DataUserService } from 'src/app/services/data-user/data-user.service';
import { DescriptionsService } from 'src/app/services/descriptions/descriptions.service';
import { ListsService } from 'src/app/services/lists/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  dataUserId!: number; // Pour récupérer l'id de l'utilisateur (pour les services).
  listsArray!: any[];

  constructor(private _dataBack: DataUserService,
    private _listsService: ListsService,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this._dataBack.getUser().subscribe((response: any) => {
      console.log('data du user envoyé du backend: ' + JSON.stringify({ data: response[0] }))
      this.dataUserId = response[0].user_id
      console.log('ici dataUserId : ', this.dataUserId);

      this._listsService.getAllListsOneUser(this.dataUserId).subscribe((listsBack: any) => {
        console.log('all list : ', listsBack)
        this.listsArray = listsBack
        // console.log('all list : ', JSON.stringify({ data: listsBack })
        // );
      })
    })


  }

  onClickPlus() {
    this._matDialog.open(AddListModaleComponent,
      {
        minWidth: "300px",
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: this.dataUserId
      }
    )
  }

  onClickCard() {
    this._matDialog.open(ModifListModaleComponent,
      {
        minWidth: "300px",
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms'
      }
    )
  }


  


}
