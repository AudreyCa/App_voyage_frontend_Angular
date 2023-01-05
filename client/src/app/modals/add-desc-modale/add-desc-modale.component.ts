import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionsService } from 'src/app/services/descriptions/descriptions.service';


@Component({
  selector: 'app-add-desc-modale',
  templateUrl: './add-desc-modale.component.html',
  styleUrls: ['./add-desc-modale.component.scss']
})
export class AddDescModaleComponent implements OnInit {

  descControl = new FormControl();
  dataListId!: number;
  descArray!: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public datalist: any,
    private _dialogRef: MatDialogRef<AddDescModaleComponent>,
    private _descServ: DescriptionsService
  ) { }

  ngOnInit(): void {
    
    // Récupérer l'id de la liste en cours
    console.log('onInit datalist : ', this.datalist);
    this.dataListId = this.datalist.list_id;
    console.log(this.dataListId);

    // Afficher tous les listes dès le début
    this._descServ.getAllDescOneList(this.dataListId).subscribe((allDesc: any) => {
      console.log('allDesc, recu de la BDD : ', allDesc)
      this.descArray = allDesc;
    })

  }

  /** Ajouter une description via l'input puis affiche la description immédiatement en dessous de l'input
   */
  onAddDesc() {
    // On récupère la description dans l'input
    const descForm = this.descControl.value;
    console.log('log de la value de l\'input description : ', descForm);
    console.log(this.dataListId);

    const newDesc = { detail_description: descForm }

    // Puis, on les envoie à la BDD
    this._descServ.postDesc(this.dataListId, newDesc).subscribe((newDescSend: any) => {
      console.log('envoyé à la BDD, ajout de la desc : ', newDescSend)

      // et les afficher tout de suite, sans refresh
      this._descServ.getAllDescOneList(this.dataListId).subscribe((allDesc: any) => {
        console.log('allDesc, recu de la BDD : ', allDesc)
        this.descArray = allDesc;
      })
    })

    // clean l'input
    this.descControl.reset()

  }

  /** Cette méthode sert à valider avec la touche entrer (accessibilité)
   * @param  {KeyboardEvent} event
   */
  onSendDesc(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onAddDesc()
    }
  }

  /** Cette méthode permet de modifier le description en cours
   * @param  {number} descData
   */
  onUpdateDesc(newDesc:string, descData:number) {

    console.log(descData);

    this._descServ.putDesc(newDesc, descData).subscribe((newDataDesc: any) => {
      console.log('newDataDesc, update dans la BDD : ', newDataDesc)

      this._descServ.getAllDescOneList(this.dataListId).subscribe((allDesc: any) => {
        console.log('allDesc, recu de la BDD : ', allDesc)
        this.descArray = allDesc;
      })
      
    }) 

  }


  /** Cette méthode permet de supprimer un détail de la liste en cours
   * @param  {number} descData
   */
  onDeleteDesc(descData:number) {
    
    console.log(descData);

    this._descServ.deleteOneDesc(descData).subscribe((deleteOneDesc: any) => {
      console.log('allDesc, recu de la BDD : ', deleteOneDesc)

      this._descServ.getAllDescOneList(this.dataListId).subscribe((allDesc: any) => {
        console.log('allDesc, recu de la BDD : ', allDesc)
        this.descArray = allDesc;
      })
      
    })

  }

  /** Cette méthode sert à valider la modale et aussi à en sortir
   */
  onValidateList() {
    this._dialogRef.close()
    // window.location.href = "/overview/lists";
    window.location.reload()
  }



}
