import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionsService } from 'src/app/services/descriptions/descriptions.service';
import { ListsService } from 'src/app/services/lists/lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-modale',
  templateUrl: './pdf-modale.component.html',
  styleUrls: ['./pdf-modale.component.scss']
})
export class PdfModaleComponent implements OnInit {

  title!: string;
  isChecked = false;
  titleControl = new FormControl();
  descControl = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public idUser: number,
    private _dialogRef: MatDialogRef<PdfModaleComponent>,
    private _listsService: ListsService,
    private _descServ: DescriptionsService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    console.log('onInit idUser : ', this.idUser);

    // this.titleControl = li:[this.user.user_lastName],
  }

  onAddTitle() {
    // On récupère le titre de la liste
    const titleForm = this.titleControl.value;
    console.log('log de la value de l\'input title : ', titleForm);

    const newListTitle = { list_title: titleForm }

    // const newList = Object.assign(id, newListTitle)
    // console.log('la ', newList);

    // Puis, on les envoie à la BDD
    this._listsService.postList(this.idUser, newListTitle).subscribe((titleList: any) => {
      console.log('envoyé à la BDD : ', titleList)
    })

  }
  
  /** Cette méthode sert à valider avec la touche entrée (accessibilité)
   * @param  {KeyboardEvent} event
   */
  onSendTitle(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onAddTitle()
    }
  }

  /** Cette méthode sert à valider la modale
   */
  onValidateList() {
    this._dialogRef.close()
    window.location.href = "/overview/lists";
  }

  onCancel() {
    this._dialogRef.close()
    window.location.href = "/overview/lists";
  }

}
