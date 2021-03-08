import { Component, OnInit } from '@angular/core';
import { AuthService }       from './auth/auth.service';
import { Subscription }      from 'rxjs';
import { MatDrawer, matDrawerAnimations } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'i-p';
  private authStatus;
  userIsAuthenticated = false;
  private authListenerSub: Subscription;
  constructor(private authService: AuthService){}

  showFiller = false;

  ngOnInit() {
    this.authService.autoAuthUser();
    
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authListenerSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
    this.userIsAuthenticated = isAuthenticated;
    });
  }
  
  onLogout(sidebar: MatDrawer) {
    sidebar.close()
    this.authService.logout()
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
   }
}
