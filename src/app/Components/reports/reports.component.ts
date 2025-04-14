import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {  RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  openMenu: string | null = null;

  toggleMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }
}
