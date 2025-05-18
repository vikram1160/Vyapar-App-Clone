import { Component, OnInit  } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { ReportsComponent } from '../reports/reports.component';
import { CommonModule } from '@angular/common';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,ButtonModule,DrawerModule,ReportsComponent,CommonModule,RouterModule,SettingComponent],
  templateUrl: './sidebar.component.html', 
  styleUrls: ['./sidebar.component.css']
})
export class sidebarComponent {


    showReports: boolean = false;

 visible: boolean = false;

opneDrawer() {
  this.visible = true
}
// closeDrawer(){
//   this.visible = false
// }


  toggleReports() {
    this.showReports = true
  }

    hideReports() {
    this.showReports = false;
  }

}
