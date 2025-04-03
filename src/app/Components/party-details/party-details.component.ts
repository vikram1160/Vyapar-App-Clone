import { CommonModule } from '@angular/common';;
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [RouterLink,TableModule,CommonModule],
  templateUrl: './party-details.component.html',
  styleUrl: './party-details.component.css'
})
export class PartyDetailsComponent {
  products = [

    { id: 1, type: "Sale", number: "2", date: '30/3/2025',total:'1000 ',balance:'1000'},
    
    
  ]
}
