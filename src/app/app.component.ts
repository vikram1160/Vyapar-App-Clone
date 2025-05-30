import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { sidebarComponent, } from './Components/sidebar/sidebar.component';
import { HeaderComponent } from './Components/header/header.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,HeaderComponent,sidebarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular18-project';

  isDrawerOpen = true;

  sidebarVisible: boolean = false;

 

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  isLoginPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';
      }
    });
  }
}
