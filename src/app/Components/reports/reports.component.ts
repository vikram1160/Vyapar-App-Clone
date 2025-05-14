import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,RouterLink,Dialog,ButtonModule,InputTextModule,MessageModule,DropdownModule,FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
   features = [
    { name: 'Feature 1', silver: true, gold: true },
    { name: 'Feature 2', silver: false, gold: true },
    { name: 'Feature 3', silver: true, gold: false },
  ];

  planOptions = [
  { label: '1 Year Plan', value: '1_year' },
  { label: '2 Year Plan', value: '2_year' },
  { label: '3 Year Plan', value: '3_year' }
];

selectedPlan: string = '1_year'; // default selected plan
  openMenu: string | null = null;
   display: boolean = false;


    // visible: boolean = false;

    showDialog() {
      this.display = true;
    }

  toggleMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }
isSubSidebarVisible = false;
  sidebarVisible = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }



}
