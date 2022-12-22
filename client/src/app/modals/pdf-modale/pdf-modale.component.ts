import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionsService } from 'src/app/services/descriptions/descriptions.service';

import jspdf from 'jspdf';
import 'jspdf-autotable';
// const jsPDF = require('jspdf');
// require('jspdf-autotable');

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
  onGeneratePdf() {

    // On instancie un objet pdf
    const pdf = new jspdf();
  
    // (pdf as any).autotable({
    //   body: this.array
    // })

    pdf.setFontSize(20);
    pdf.text('Voici votre liste', 11, 8);

    // Pour la mise-en page
    (pdf as any).autoTable({
      // j'y insère le titre
      head: this.datalistTitle,
      // Puis ce que je veux y mettre, ici, le tableau de toutes les decriptions.
      body: this.descArray,
      theme: 'plain',
      // Pour personnalliser l'affichage :
      didDrawCell: (data: { column: {index: any; }; }) => {
      console.log(data.column.index)
    }
    })

    // pour que le pdf généré s'ouvre dans une nouvelle fenetre : 
    pdf.output('dataurlnewwindow')

    // Pour laisser la possibilité, à l'utilisateur de sauvegarder
    pdf.save('liste.pdf')


    // this._dialogRef.close()
  }

}
