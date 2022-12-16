import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DeleteProfilModalComponent } from 'src/app/modals/delete-profil-modal/delete-profil-modal.component';
import { User } from 'src/app/models/user.model';
import { DataUserService } from 'src/app/services/data-user/data-user.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  userForm!: FormGroup;
  myControl = new FormControl('');
  user = new User();
  dataUser!: any;
  dataUserId!: number; //  On recoit l'id grace au get dans le onInit pour l'utiliser dans le put
  dataUserLastname!: string;
  dataUserFirstname!: string;
  dataUserMail!: string;
  confirmPassword!: "string";

  constructor(
    private _fb: FormBuilder,
    private _dataBack: DataUserService,
    private _snackBar: MatSnackBar,
    private _route: Router,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Les attributs, à l'intérieur, servent à lier au html avec formControlName
    // on initialise avec le model User pour ensuite faire appel à object assign.
    this.userForm = this._fb.group({
      user_lastName: [this.user.user_lastName],
      user_firstName: [this.user.user_firstName],
      user_mail: [this.user.user_mail, [Validators.email, Validators.required]],
      user_mdp: [this.user.user_mdp, [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8)]]
    })

    this._dataBack.getUser().subscribe((response: any) => {
      console.log('data du user envoyé du backend: ' + JSON.stringify({ data: response[0] }))
      this.dataUser = response[0]
      console.log('ici dataUser : ', this.dataUser);
      this.dataUserId = this.dataUser.user_id,
      this.dataUserLastname = this.dataUser.user_lastname,
      this.dataUserFirstname = this.dataUser.user_firstname,
      this.dataUserMail = this.dataUser.user_mail
    })
  }

  onSubmit(updateUser: User) {

    // On récupère les valeurs du formulaire qu'on log après
    const form = this.userForm.value;
    console.log('ici, form : ', form);


    // Pour lier au backend:
    // Etape 1 : on récupère les données du formulaire
    this.user = Object.assign(this.user, form)
    console.warn('ici, this user : ', this.user)

    // Pour le confirm user_mdp :
    const pass = form.user_mdp
    const confirmPass = form.confirmPassword
    if (pass !== confirmPass) {

      this._snackBar.open('votre mot de passe ne correspond pas', 'ok', { verticalPosition: 'top' })
      return;
    }

    //  console.log(this.dataUserId);

    // Etape 2 : on les envoie au backend
    this._dataBack.putUser(this.dataUserId, form).subscribe((response: any) => {
      // console.log('modif envoyé au backend: ' + response.id)
      console.log('modif envoyé au backend: ' + JSON.stringify(response))
    })

    this._route.navigate(['/login'])

  }

  onDeleteProfil() {

    // on va afficher une modale pour valider la demande de l'utilisateur car c'est une manipulation définitive.
    // pour afficher les data reçues du serveur dans une modale :

    this._matDialog.open(DeleteProfilModalComponent,
      {
        width: "300px",
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: this.dataUserId
      }
    )
  }

}
