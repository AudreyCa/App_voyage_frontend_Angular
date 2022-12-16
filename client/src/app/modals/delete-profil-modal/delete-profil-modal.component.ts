import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data-user/data-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-profil-modal',
  templateUrl: './delete-profil-modal.component.html',
  styleUrls: ['./delete-profil-modal.component.scss']
})
export class DeleteProfilModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public idUser:number,
   private _dialogRef: MatDialogRef<DeleteProfilModalComponent>,
    private _dataServ: DataService,
    private _route: Router) { }


  onDeleteProfil(idUser: number) {
    this._dataServ.deleteUser(idUser).subscribe()
    this._dialogRef.close()
    this._route.navigate(['/login'])
  }

  onBackToProfil() {
    this._dialogRef.close()
  }

}

