import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataUserService } from 'src/app/services/data-user/data-user.service';
import { Router } from '@angular/router';
import { ListsService } from 'src/app/services/lists/lists.service';
import { response } from 'express';

@Component({
  selector: 'app-delete-profil-modal',
  templateUrl: './delete-profil-modal.component.html',
  styleUrls: ['./delete-profil-modal.component.scss']
})
export class DeleteProfilModalComponent implements OnInit{

  // allListArray!:any;

  constructor(@Inject(MAT_DIALOG_DATA) public idUser:number,
   private _dialogRef: MatDialogRef<DeleteProfilModalComponent>,
    private _dataServ: DataUserService,
    private _route: Router) { }

    ngOnInit(): void {}

  onDeleteProfil(idUser: number) {

    this._dataServ.deleteUser(idUser).subscribe()
    
    this._dialogRef.close()
    this._route.navigate(['/login'])
  }

  onBackToProfil() {
    this._dialogRef.close()
  }

}

