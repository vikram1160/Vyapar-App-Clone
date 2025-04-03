import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SadinavComponent } from './Components/sadinav/sadinav.component';
import { HeaderComponent } from './Components/header/header.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,SadinavComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular18-project';

  sidebarVisible: boolean = false;
}
