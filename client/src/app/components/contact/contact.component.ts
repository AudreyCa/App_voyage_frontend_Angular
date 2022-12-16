import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  myControl = new FormControl('');

  constructor( private _fb: FormBuilder,
    private _contact:ContactService,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.contactForm = this._fb.group({
      user_name: "",
      user_email: ["", [Validators.email, Validators.required]],
      user_message: ["", Validators.required],
    })
  }

  onSend(messageContact: any) {

    const contactMSG = this.contactForm.value;
    console.log('ici, contactMSG : ', contactMSG);

    this._contact.postMsg(contactMSG).subscribe((response: any) => {
      console.log('envoyé au back : ', response);
      this._snackBar.open('Votre message a bien été envoyé', 'ok', { verticalPosition: 'top' })
      return;
    })
  }

}
