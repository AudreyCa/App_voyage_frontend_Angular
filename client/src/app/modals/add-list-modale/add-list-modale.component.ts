import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListsService } from 'src/app/services/lists/lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-list-modale',
  templateUrl: './add-list-modale.component.html',
  styleUrls: ['./add-list-modale.component.scss']
})
export class AddListModaleComponent implements OnInit {

  titleControl = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public idUser: number,
    private _dialogRef: MatDialogRef<AddListModaleComponent>,
    private _listsService: ListsService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    console.log('onInit idUser : ', this.idUser);
  }



  /** Cette méthode sert à valider le titre pour l'envoyer à la BDD, sortir de la modale et refresh la page de liste afined voir les listes s'afficher directement 
   */
  onValidateList() {

    // On récupère le titre de la liste
    const titleForm = this.titleControl.value;
    console.log('log de la value de l\'input title : ', titleForm);

    const newListTitle = { list_title: titleForm }

    // Puis, on les envoie à la BDD
    this._listsService.postList(this.idUser, newListTitle).subscribe((titleList: any) => {
      console.log('envoyé à la BDD : ', titleList)
      this._dialogRef.close()
    })


    //  this._route.navigate(['/overview/lists'])
    window.location.reload();
    // window.location.href = "/overview/lists";

    this._dialogRef.close()
  }



  /** Cette méthode sert à valider avec la touche entrée (accessibilité) puis à exectuer la methode onValidateList
   * @param  {KeyboardEvent} event
   */
  onSendTitle(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onValidateList()
    }
  }


  /** Cette méthode permet simplement de sortir de la modale si jamais l'utilisateur change d'avis ou s'est trompé de chemin
   */
  onCloseModale() {
    this._dialogRef.close()
  }

}
