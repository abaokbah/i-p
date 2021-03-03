import { Component, 
          OnInit, 
          OnDestroy, 
          ViewChild, 
          HostListener }       from '@angular/core';
import { Subscription }        from 'rxjs';
import { AuthService }         from '../auth/auth.service';
import { MatSidenav }          from '@angular/material/sidenav';



@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent{
  // Side nav snippet
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  userIsAuthenticated = false;
  private authListenerSub: Subscription;

  constructor(private authService: AuthService) {

  }

  onLogout() {
    this.authService.logout()
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authListenerSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
    this.userIsAuthenticated = isAuthenticated;
    });

    console.log(window.innerWidth) //&& this.userIsAuthenticated == true
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) { //&& this.userIsAuthenticated == true
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

   ngOnDestroy() {
    this.authListenerSub.unsubscribe();
   }
}
