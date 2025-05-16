import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [DrawerModule,],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}
