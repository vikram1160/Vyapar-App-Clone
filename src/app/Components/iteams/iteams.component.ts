import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-iteams',
  standalone: true,
  imports: [RouterLink,TableModule,FormsModule,InputGroupModule,DialogModule,ButtonModule],
  templateUrl: './iteams.component.html',
  styleUrl: './iteams.component.css'
})
export class IteamsComponent {
  products =[
    { id: 3, type: "Sale", number: "4", date: '31/3/2025',total:'1200 ',balance:'1200'},  
    { id: 4, type: "Sale", number: "3", date: '20/4/2025',total:'1499 ',balance:'1499'},  
  ]
  
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
