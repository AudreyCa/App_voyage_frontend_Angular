import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ListsComponent } from './components/lists/lists.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OverviewComponent } from './components/overview/overview.component';
import { SideBarRightComponent } from './components/side-bar-right/side-bar-right.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ContactComponent } from './components/contact/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { DeleteProfilModalComponent } from './modals/delete-profil-modal/delete-profil-modal.component';
import { AddListModaleComponent } from './modals/add-list-modale/add-list-modale.component';
import { MatDividerModule } from '@angular/material/divider';
import { FileUploadModule } from 'ng2-file-upload';
import { ModifTitleModaleComponent } from './modals/modif-title-modale/modif-title-modale.component';
import { AddDescModaleComponent } from './modals/add-desc-modale/add-desc-modale.component';
import { SuppListModaleComponent } from './modals/supp-list-modale/supp-list-modale.component';
import { PdfModaleComponent } from './modals/pdf-modale/pdf-modale.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    ListsComponent,
    NotFoundComponent,
    OverviewComponent,
    SideBarRightComponent,
    ContactComponent,
    DeleteProfilModalComponent,
    AddListModaleComponent,
    ModifTitleModaleComponent,
    AddDescModaleComponent,
    SuppListModaleComponent,
    PdfModaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    FileUploadModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [
    AppComponent,    
  ]
})
export class AppModule { }
