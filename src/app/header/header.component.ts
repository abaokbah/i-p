import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                 from 'rxjs';
import { AuthService }                  from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent{

  userIsAuthenticated = false;
  //private authListenerSub: Subscription;

  constructor(private authService: AuthService) {

  }

  onLogout() {
    // this.authService.logout()
  }

  ngOnInit() {
    // this.userIsAuthenticated = this.authService.getIsAuthenticated();
    // this.authListenerSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
    //     this.userIsAuthenticated = isAuthenticated;
    //   });
    }


   ngOnDestroy() {
    // this.authListenerSub.unsubscribe();
   }
}
