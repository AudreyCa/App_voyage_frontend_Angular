import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDescModaleComponent } from 'src/app/modals/add-desc-modale/add-desc-modale.component';
import { AddListModaleComponent } from 'src/app/modals/add-list-modale/add-list-modale.component';
import { ModifTitleModaleComponent } from 'src/app/modals/modif-title-modale/modif-title-modale.component';
import { PdfModaleComponent } from 'src/app/modals/pdf-modale/pdf-modale.component';
import { SuppListModaleComponent } from 'src/app/modals/supp-list-modale/supp-list-modale.component';
import { DataUserService } from 'src/app/services/data-user/data-user.service';
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
      })
    })

  }


  /** Cette méthode sert à modifier le titre de la liste via une modale
   * @param  {any} list
   */
  onClickModif(list:any) {

    const modalTitleModif = this._matDialog.open(ModifTitleModaleComponent,
      {
        minWidth: "300px",
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: list
      }
    )

  }

  /** Cette méthode sert à ajouter des descriptions via une modale
   * @param  {any} list
   */
  onClickAddDesc(list:any) {
    this._matDialog.open(AddDescModaleComponent,
      {
        minWidth: "300px",
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: list
      }
    )
  }

  /** Cette méthode sert à supprimer la liste via une modale
   * @param  {any} list
   */
  onClickSuppList(list:any) {
    this._matDialog.open(SuppListModaleComponent,
      {
        minWidth: "300px",
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: list
      }
    )
  }

  /** Cette méthode sert à visualiser la liste en entier (et peut être à générer la list en pdf) via une modale
   * @param  {any} list
   */
  onClickPrintList(list:any) {
    this._matDialog.open(PdfModaleComponent,
      {
        minWidth: "300px",
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: list
      }
    )
  }

    /** Cette méthode sert à ajouter une list via le boutton add
  */
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

}
