import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userFormConnexion!: FormGroup;
  user = new User();

  constructor(
    private _fb: FormBuilder,
    private _route: Router,
    private _dataBack: DataService,
  ) { }

  ngOnInit(): void {

    this.userFormConnexion = this._fb.group({
      user_mail: [this.user.user_mail, Validators.required],
      user_mdp: [this.user.user_mdp, Validators.required]
    })


  }

  onSubmit() {
    // On récupère les valeurs du formulaire qu'on log après
    const form = this.userFormConnexion.value;
    console.log('form: ', form);

    // Pour lier au backend :
    // On envoie au backend ce qu'on a fait avec Object assign
    this.user = Object.assign(this.user, form)
    console.log('this.user', this.user)

    //  puis, on les envoie au backend
    // Et on n'oublie pas d'instancier le nouvel utilisateur en haut
    this._dataBack.postLogin(this.user).subscribe((response: any) => {
      // let {headers, status, body} = response

      console.log('token ' + response.accessToken)

      // on récupère le token pour le stocker dans le localStorage avec setItem
      localStorage.setItem('token', response.accessToken)

      this._route.navigate(['/profil'])

    })

    //   // on récupère le token pour le stocker dans le localStorage avec setItem
    // let {headers, status, body} = response
    //   console.log('token ' + response.token)
    //   localStorage.setItem('token', response.token)

    // // On récupère l'avatar de l'API reqres
    // this._userService.getUsers().subscribe((value:any) => {
    //   const avatarUsers = value.data[1].avatar
    //   // On met le mail et l'avatar dans un objet
    //   const user = {email: mailValue, avatar: avatarUsers}
    //   // On les met dans les crée dans le localStorage
    //   localStorage.setItem('user', JSON.stringify(user))
    // })

  }

  /**Cette méthode nous permet de renvoyer 
   * vers le register quand on clique 
   * sur 'ici' pour s'enregistrer
   */
  onRegister() {
    this._route.navigate(['/register'])
  }

}

// bobo@gmail.com
