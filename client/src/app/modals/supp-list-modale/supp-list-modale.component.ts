import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionsService } from 'src/app/services/descriptions/descriptions.service';
import { ListsService } from 'src/app/services/lists/lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supp-list-modale',
  templateUrl: './supp-list-modale.component.html',
  styleUrls: ['./supp-list-modale.component.scss']
})
export class SuppListModaleComponent implements OnInit {

  dataListId!: number;
  descArray!: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public dataList: any,
    private _dialogRef: MatDialogRef<SuppListModaleComponent>,
    private _listsService: ListsService,
    private _descServ: DescriptionsService,
    private _route: Router
  ) { }

  ngOnInit(): void {

    console.log('onInit dataList : ', this.dataList);

    this.dataListId = this.dataList.list_id
    console.log('onInit dataListId : ', this.dataListId);

    this._descServ.getAllDescOneList(this.dataListId).subscribe((dataDescription:any) => {
      console.log('dataDescription :', dataDescription);
      this.descArray = dataDescription;
    })

  }


  /** Cette méthode permet de supprimer la liste en cours
   */
  onDeleteList() {

      this._listsService.deleteList(this.dataListId).subscribe((titleList: any) => {
        console.log('envoyé à la BDD : ', titleList)
      })
    
    window.location.href = "/overview/lists";
    // this._route.navigate(['/overview/lists'])
    // window.location.reload();

    this._dialogRef.close()
  }


  /** Cette méthode permet simplement de sortir de la modale si jamais l'utilisateur change d'avis ou s'est trompé de chemin
   */
  onCloseModale() {
    this._dialogRef.close()
  }

}
