import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.scss']
})
export class SideBarRightComponent {

  constructor(private _route: Router) { }

  ngOnInit(): void { }

  onLogOut () {
    localStorage.clear()
    this._route.navigate(['/login'])
  }

}
