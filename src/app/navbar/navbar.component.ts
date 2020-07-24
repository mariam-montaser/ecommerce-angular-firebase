import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // user: firebase.User; // need to unsubscibe manually on destroy
  // user$: Observable<firebase.User>;  // will unsubscribe automaticelly

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.afAuth.authState.subscribe(user => this.user = user)
    // this.user$ = this.afAuth.authState;
    // this.user$ = this.authService.user$;
  }

  logout() {
    this.authService.logout();
  }

}
