import { Component } from '@angular/core';
import { SettingComponent } from '../../setting/setting.component';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [SettingComponent,DrawerModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
 
  visible: boolean = true;

closeDrawer() {
  this.visible = false;
}


}
