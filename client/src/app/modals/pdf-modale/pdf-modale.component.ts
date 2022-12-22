import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionsService } from 'src/app/services/descriptions/descriptions.service';

import * as html2pdf from 'html2pdf.js';

// import jspdf from 'jspdf';
// import 'jspdf-autotable';

@Component({
  selector: 'app-pdf-modale',
  templateUrl: './pdf-modale.component.html',
  styleUrls: ['./pdf-modale.component.scss']
})
export class PdfModaleComponent implements OnInit {

  dataListId!: number;
  datalistTitle!: string;
  descArray!: any[];

  array = ['name', 18]

  constructor(@Inject(MAT_DIALOG_DATA) public datalist: any,
    private _dialogRef: MatDialogRef<PdfModaleComponent>,
    private _descServ: DescriptionsService
  ) { }

  ngOnInit(): void {
    // Récupérer l'id de la liste en cours
    console.log('onInit datalist : ', this.datalist);
    this.dataListId = this.datalist.list_id;
    this.datalistTitle = this.datalist.list_title
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
  onDeleteDesc(descData: number) {

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
  onGeneratePdf() {

    var element = document.getElementById('print');

    var opt = {
      margin: 1,
      filename: 'liste.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();

    this._dialogRef.close()
  }

}
