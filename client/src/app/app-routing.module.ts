import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
   {path:'', component: LoginComponent},
   {path:'login', component: LoginComponent},
   {path:'register', component: RegisterComponent},
   {path:'profil', component: ProfilComponent},
   {path:'lists', component: ListsComponent},
   {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
