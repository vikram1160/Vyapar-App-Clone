import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TabView, TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-iteams',
  standalone: true,
  imports: [RouterLink,TableModule,FormsModule,InputGroupModule,DialogModule,ButtonModule,
    TabView,TabViewModule,CommonModule],
  templateUrl: './iteams.component.html',
  styleUrl: './iteams.component.css'
})
export class IteamsComponent {

  showHeaderI = false;

  products =[
    { id: 3, type: "Sale", number: "4", date: '15/4/2025',total:'1200 ',balance:'1200'},  
    { id: 4, type: "Sale", number: "3", date: '16/4/2025',total:'1499 ',balance:'1499'},  
  ]
  
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

     items = [
    { name: 'is', quantity: -9, value: 0 },
    { name: 'item one', quantity: -1, value: 0 },
    { name: 'key borde', quantity: 0, value: 0 },
    { name: 'laptop hub', quantity: -1, value: 0 },
    { name: 'mause', quantity: 1, value: 200 },
    { name: 'mobails', quantity: 1, value: 0 },
    { name: 'monail', quantity: 0, value: 0 }
  ];
}
