import { CommonModule } from '@angular/common';;
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputGroup, InputGroupModule,  } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';



@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [RouterLink,TableModule,CommonModule,Tooltip,DialogModule,ButtonModule,InputGroupModule,FormsModule,InputTextModule,CommonModule,InputSwitchModule],
  templateUrl: './party-details.component.html',
  styleUrl: './party-details.component.css'
})
export class PartyDetailsComponent {
  products = [

    { id: 1, type: "Sale", number: "2", date: '30/3/2025',total:'1000 ',balance:'1000'},
    { id: 2, type: "Purchase", number: "3", date: '3/4/2025',total:'100 ',balance:'100'},
    { id: 3, type: "Sale", number: "4", date: '31/3/2025',total:'1200 ',balance:'1200'},
    
  ]

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
