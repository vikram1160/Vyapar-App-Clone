import { Component, OnInit  } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { SettingComponent } from '../setting/setting.component';
import { ReportsComponent } from '../reports/reports.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sadinav',
  standalone: true,
  imports: [RouterLink,ButtonModule,DrawerModule,ReportsComponent,CommonModule,RouterModule,SettingComponent],
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



openSettingsDrawer(): void {
  this.hideReports(); 
  this.visible = true;
}

//  visible = false;
  activeComponent: string = 'sparty'; // default

  // onSelectComponent(componentName: string) {
  //   this.activeComponent = componentName;
  //   this.visible = false; // close the drawer after selection
  // }

  onSelectComponent(selectedComponent: string) {
  if (typeof selectedComponent !== 'string') {
    console.error('Invalid component selected:', selectedComponent);
    return;
  }
  }
  
}
