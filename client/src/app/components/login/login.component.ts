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
      
      // console.log('user ' + JSON.stringify(response.user))
      // const dataUser = JSON.stringify(response.user)
      console.log('token ' + response.accessToken)
      const tokenUser = response.accessToken

      // On les met dans le localStorage
      localStorage.setItem('token', tokenUser)

      // puis on redirige vers la page vers laquelle on veut que l'utilisateur aille
      this._route.navigate(['/overview/lists'])

    })

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
