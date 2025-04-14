import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-purchase-bills',
  standalone: true,
  imports: [DropdownModule,FormsModule,CalendarModule,TableModule],
  templateUrl: './purchase-bills.component.html',
  styleUrl: './purchase-bills.component.css'
})
export class PurchaseBillsComponent {
  cities: City[] | undefined;

  selectedCity: City | undefined;

   
  ities: City[] | undefined;

  selecteCity: City | undefined;
  
  ngOnInit() {
    this.cities = [
        { name: 'This Month', code: 'NY' },
        { name: 'Last Month', code: 'RM' },
        { name: 'This Quarter', code: 'LDN' },
        { name: 'THis Year', code: 'IST' },
        { name: 'Custom', code: 'PRS' }
    ];

    this.ities = [
      { name: 'All Firms', code: 'NY' },
      { name: 'Laptop Hub', code: 'RM' },
    
  ];
}


date: Date = new Date()
}
