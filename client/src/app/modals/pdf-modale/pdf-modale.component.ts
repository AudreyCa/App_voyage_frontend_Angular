import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionsService } from 'src/app/services/descriptions/descriptions.service';
import { ListsService } from 'src/app/services/lists/lists.service';

@Component({
  selector: 'app-pdf-modale',
  templateUrl: './pdf-modale.component.html',
  styleUrls: ['./pdf-modale.component.scss']
})
export class PdfModaleComponent implements OnInit {

  dataListId!: number;
  descArray!: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public datalist: any,
    private _dialogRef: MatDialogRef<PdfModaleComponent>,
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
  
  /** Cette méthode permet de supprimer un détail de la liste en cours
   * @param  {number} descData
   */
  onDeleteDesc(descData:number) {
    
    console.log(descData);

    this._descServ.deleteOneDesc(descData).subscribe((deleteOneDesc: any) => {
      console.log('allDesc, recu de la BDD : ', deleteOneDesc)
    })

    this._descServ.getAllDescOneList(this.dataListId).subscribe((allDesc: any) => {
      console.log('allDesc, recu de la BDD : ', allDesc)
      this.descArray = allDesc;
    })

  }


  /** Cette méthode sert à valider la modale
   */
  onValidateList() {
    this._dialogRef.close()
    window.location.href = "/overview/lists";
  }


  /** Cette méthode permet d'imprimer la liste
   */
  onPrint() {
    console.log('inclure la possibilité de print ici');
    this._dialogRef.close()
    window.location.href = "/overview/lists";
  }

}
