import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListsService } from 'src/app/services/lists/lists.service';

@Component({
  selector: 'app-supp-list-modale',
  templateUrl: './supp-list-modale.component.html',
  styleUrls: ['./supp-list-modale.component.scss']
})
export class SuppListModaleComponent implements OnInit {

  dataListId!: number;

  constructor(@Inject(MAT_DIALOG_DATA) public dataList: any,
    private _dialogRef: MatDialogRef<SuppListModaleComponent>,
    private _listsService: ListsService
  ) { }

  ngOnInit(): void {

    console.log('onInit dataList : ', this.dataList);
    this.dataListId = this.dataList.list_id
    console.log('onInit dataListId : ', this.dataListId);
  }


  /** Cette méthode permet de supprimer la liste en cours
   */
  onDeleteList() {

    this._listsService.deleteList(this.dataListId).subscribe((titleList: any) => {
      console.log('envoyé à la BDD : ', titleList)
    })

    this._dialogRef.close()
    window.location.href = "/overview/lists";
  }



  /** Cette méthode sert à valider avec la touche entrée (accessibilité) puis à exectuer la methode onValidateList
   * @param  {KeyboardEvent} event
   */
  onUpdateTitle(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onDeleteList()
      this._dialogRef.close()
      window.location.href = "/overview/lists";
    }
  }


  /** Cette méthode permet simplement de sortir de la modale si jamais l'utilisateur change d'avis ou s'est trompé de chemin
   */
  onCloseModale() {
    this._dialogRef.close()
  }

}
