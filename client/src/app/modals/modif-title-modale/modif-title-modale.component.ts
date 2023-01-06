import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListsService } from 'src/app/services/lists/lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-title-modale',
  templateUrl: './modif-title-modale.component.html',
  styleUrls: ['./modif-title-modale.component.scss']
})
export class ModifTitleModaleComponent implements OnInit {

  newTitleControl = new FormControl();
  dataListId!: number;

  constructor(@Inject(MAT_DIALOG_DATA) public dataList: any,
    private _dialogRef: MatDialogRef<ModifTitleModaleComponent>,
    private _listsService: ListsService,
    private _route: Router
  ) { }

  ngOnInit(): void {

    console.log('onInit dataList : ', this.dataList);
    this.dataListId = this.dataList.list_id
    console.log('onInit dataListId : ', this.dataListId);
  }



  /** Cette méthode sert à valider le titre pour l'envoyer à la BDD, sortir de la modale et refresh la page de liste afined voir les listes s'afficher directement 
   */
  onUpdateList() {

    // On récupère le titre de la liste
    const titleForm = this.newTitleControl.value;
    console.log('log de la value de l\'input title : ', titleForm);

    const newListTitle = { list_title: titleForm }
    console.log('newlisttitile :', newListTitle);

    // Puis, on les update dans la BDD
    this._listsService.putList(newListTitle, this.dataListId).subscribe((titleList: any) => {
      console.log('envoyé à la BDD : ', titleList)
    })
     
        window.location.reload();
        this._dialogRef.close()

    // window.location.href = "/overview/lists";
    // this._route.navigate(['/overview/lists'])
  }



  /** Cette méthode sert à valider avec la touche entrée (accessibilité) puis à exectuer la methode onValidateList
   * @param  {KeyboardEvent} event
   */
  onUpdateTitle(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onUpdateList()
    }
  }


  /** Cette méthode permet simplement de sortir de la modale si jamais l'utilisateur change d'avis ou s'est trompé de chemin
   */
  onCloseModale() {
    this._dialogRef.close()
  }

}
