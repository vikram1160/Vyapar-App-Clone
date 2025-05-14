import { Component, OnInit  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { SettingComponent } from '../setting/setting.component';
import { ReportsComponent } from '../reports/reports.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sadinav',
  standalone: true,
  imports: [RouterLink,ButtonModule,DrawerModule,SettingComponent,ReportsComponent,CommonModule],
  templateUrl: './sadinav.component.html',
  styleUrl: './sadinav.component.css'
})
export class SadinavComponent {

  visible: boolean = false;

    showReports: boolean = false;

  toggleReports() {
    this.showReports = true
  }

    hideReports() {
    this.showReports = false;
  }
  
}
