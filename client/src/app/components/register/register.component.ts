import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;
  myControl = new FormControl('');
  confirmPassword!: "string";
  user = new User();

constructor(
  private _fb: FormBuilder,
  private _dataBack: DataService,
  private _snackBar: MatSnackBar,
  private _route: Router
  ) { }

  ngOnInit(): void {

    // Les attributs, à l'intérieur, servent à lier au html
    // on initialise avec le model User
    this.userForm = this._fb.group({
      user_lastName:[this.user.user_lastName],
      user_firstName:[this.user.user_firstName],
      user_mail:[this.user.user_mail, [Validators.email, Validators.required]],
      user_mdp:[this.user.user_mdp, [Validators.required, Validators.minLength(8)]],
      confirmPassword:["", [Validators.required, Validators.minLength(8)]]
    })

  }


  onSubmit() {
    // On récupère les valeurs du formulaire qu'on log après
    const form = this.userForm.value;
    console.log(form);

    // Pour le confirm user_mdp :
    const pass = form.user_mdp
    const confirmPass = form.confirmPassword
    if(pass !== confirmPass) {
  
      this._snackBar.open('votre mot de passe ne correspond pas','ok',{verticalPosition:'top'})
      return;
    }


    // Pour lier au backend:
    // Etape 1 : on récupère les données du formulaire
    this.user = Object.assign(this.user, form)
    console.warn(this.user)

    // Etape 2 : on les envoie au backend
    this._dataBack.postUser(this.user).subscribe((response:any) => {
      console.log('envoyé au backend: ' + response)
    })

    this._route.navigate(['/login'])

  }

}

