import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { sidebarComponent, } from './Components/sidebar/sidebar.component';
import { HeaderComponent } from './Components/header/header.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,HeaderComponent,sidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular18-project';

  sidebarVisible: boolean = false;
}
