import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userFormConnexion!: FormGroup;
  // user = new User();

  constructor( 
    private _fb: FormBuilder,
    // private _route: Router
    // private _userService: UserService,
    // private _backend: BackendService
    ) { }

  ngOnInit(): void {

    this.userFormConnexion = this._fb.group({
      email:["", Validators.required],
      password:["", Validators.required]
    })


  }

  onSubmit() {
    // On récupère les valeurs du formulaire qu'on log après
    const form = this.userFormConnexion.value;
    console.log(form);

    // // Pour lier au backend :
    // // Et on n'oublie pas d'instancier le nouvel utilisateur en haut
    // this.user = Object.assign(this.user, form)
    // console.log(this.user)
    // // On envoie au backend ce qu'on a fait avec Oject assign
    // this._backend.postLogin(this.user).subscribe((response:any) => {
    //   console.log('token ' + response.token)

    //   // on récupère le token pour le stocker dans le localStorage avec setItem
    //   localStorage.setItem('token', response.token)
    
    //   this._route.navigate(['/overview'])

    // })
    

    // // On récupère le mail du formulaire ci dessus
    // const mailValue = this.userFormConnexion.value.email
    // // On récupère l'avatar de l'API reqres
    // this._userService.getUsers().subscribe((value:any) => {
    //   const avatarUsers = value.data[1].avatar
    //   // On met le mail et l'avatar dans un objet
    //   const user = {email: mailValue, avatar: avatarUsers}
    //   // On les met dans les crée dans le localStorage
    //   localStorage.setItem('user', JSON.stringify(user))
    // })

    // pour le routing
  }

  /**Cette méthode nous permet de renvoyer 
   * vers le register quand on clique 
   * sur 'ici' pour s'enregistrer
   */
  onRegister() {
    // this._route.navigate(['/register'])
  }

}
