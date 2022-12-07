import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { map, startWith } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  countries!:any;
  myControl = new FormControl('');
  options!: string[];
  // filteredOptions!: Observable<string[]>;
  userForm!: FormGroup;
  // user = new User();

constructor(
  // private _dataService: DataService, 
  // private _userService: UserService, 
  private _fb: FormBuilder, 
  private _matDialog: MatDialog,
  private _snackBar: MatSnackBar,
  // private _backend: BackendService
  ) { }

  ngOnInit(): void {
    // Pour récupérer la liste des pays via l'API dans dataservice
    // this._dataService.getCountries().subscribe((countries:any) => { 
    //   this.countries = countries;
    //   this.options = this.sortCountries();
    //   // @ts-ignore
    //   this.filteredOptions = this.userForm?.get("country")?.valueChanges.pipe(
    //     startWith(''),
    //     map(value => this._filter(value || '')),
    //   );
    // });

    // .groupe pour grouper dans le formulaire. 
    // Les attributs, à l'intérieur, servent à lier au html
    // on initialise avec le model User
    // this.userForm = this._fb.group({
    //   lastName:[this.user.lastName, Validators.required],
    //   firstName:[this.user.firstName, Validators.required],
    //   username:[this.user.username, Validators.required],
    //   birthDate:this.user.birthDate,
    //   email:[this.user.email, [Validators.email, Validators.required]],
    //   phoneNumber: this.user.phoneNumber,
    //   street:[this.user.street, Validators.required],
    //   city:[this.user.city, Validators.required],
    //   zipCode: [this.user.zipCode, Validators.required],
    //   country:[this.user.country, Validators.required],
    //   skills: new FormArray([]),
    //   password:[this.user.password, [Validators.required, Validators.minLength(8)]],
    //   confirmPassword:[this.user.confirmPassword, [Validators.required, Validators.minLength(8)]]
    // })

    // this.user.avatar = 'https://dailygeekshow.com/wp-content/uploads/sites/2/2015/08/ahri_chibi_by_fuka_enrique-d712r8z.jpg';

  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  sortCountries(): string[] {
    return this.countries.map((countrieName:any) => countrieName.name.common)
  }

  onSubmit() {
    const form = this.userForm.value;
    console.log(form);

    // Pour le confirm password :
    const pass = form.password
    const confirmPass = form.confirmPassword
    if(pass !== confirmPass) {
  
      this._snackBar.open('votre mot de passe ne correspond pas','ok',{verticalPosition:'top'})
      return;
    }
    
    // pour afficher les data reçues du serveur dans une modale :
    // this._userService.postData(form).subscribe((response:any) => {
    //   console.log(response);
    //   this._matDialog.open(UserModalComponent, 
    //   {enterAnimationDuration:'800ms', 
    //   exitAnimationDuration:'800ms', 
    //   data: {date: response.createdAt, infoData: response.data}}
    //   )})
    
    // pour les skills :
    // this.user.skills = form.skills

    // Pour lier au backend:
    // Etape 1 : on récupère les données du formulaire
    // this.user = Object.assign(this.user, form)
    // console.warn(this.user)
    // // puis on les envoie au backend
    // // et on affiche les data reçues du formulaire dans la modale :
    // this._backend.register(this.user).subscribe((response:any) => {
    //   let {headers, status, body} = response
    //   console.log('envoyé au backend: ' + response)
    //   console.log('token ' + response.token)
    //   // on récupère le token pour le stocker dans le localStorage avec setItem
    //   localStorage.setItem('token', response.token)
    // })

  }

  get skills() {
     return this.userForm.get("skills") as FormArray;
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
