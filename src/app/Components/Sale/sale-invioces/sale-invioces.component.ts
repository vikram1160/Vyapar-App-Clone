import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ActivatedRoute } from '@angular/router';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-sale-invioces',
  standalone: true,
  imports: [DropdownModule, FormsModule, CalendarModule, TableModule],
  templateUrl: './sale-invioces.component.html',
  styleUrl: './sale-invioces.component.css'
})
export class SaleInviocesComponent implements OnInit {

  id: number | undefined;
  date: Date = new Date();
  invoice_no: string | undefined;
  party_name: string | undefined;
  transactoins_type: string | undefined;
  payment_type: string | undefined;
  amount: string | undefined;
  balance_due: string | undefined;

  products = [
    {
      id: 1,
      date: new Date("2025-04-20"),
      invoice_no: "1",
      party_name: "Mobail",
      transactoins_type: "1",
      payment_type: "8999",
      amount: "599",
      balance_due: "8400",
    },
    {
      id: 2,
      date: new Date("2025-04-23"),
      invoice_no: "3",
      party_name: "Laptop",
      transactoins_type: "2 ",
      payment_type: "12999",
      amount: "999",
      balance_due: "24000",
    }
  ];

  cities: City[] = [];
  selectedCity: City | undefined;

  ities: City[] = [];
  selecteCity: City | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cities = [
      { name: 'This Month', code: 'NY' },
      { name: 'Last Month', code: 'RM' },
      { name: 'This Quarter', code: 'LDN' },
      { name: 'This Year', code: 'IST' },
      { name: 'Custom', code: 'PRS' }
    ];

    this.ities = [
      { name: 'All Firms', code: 'NY' },
      { name: 'Laptop Hub', code: 'RM' },
    ];

    this.route.queryParams.subscribe(params => {
      const id = this.products.length + 1;
      const invoice_no = params['invoice_no'];
      const invoice_date = params['invoice_date'];
      const party_name = params['party_Name'];
      const transactions_type = params['transactions_type'];
      const payment_type = params['payment_type'];
      const amount = params['amount'];
      const balance_due = params['balance_due'];

      console.log('ID:', id);
      console.log('Invoice Number:', invoice_no);
      console.log('Date:', invoice_date);
      console.log('Party Name:', party_name);
      console.log('transactions_type:', transactions_type);
      console.log('payment_type:', payment_type);
      console.log('amount:', amount);
      console.log('balance_due:', balance_due);
      
      
      // Only push if required params are present
      if (invoice_no && invoice_date) {
        let newProduct = {
          id,
          date: new Date(invoice_date),
          invoice_no: String(invoice_no),
          party_name: String(party_name || ''),
          transactoins_type: String(transactions_type || ''),
          payment_type: String(payment_type || ''),
          amount: String(amount || ''),
          balance_due: String(balance_due || '')
        };

      
        this.products.push(newProduct);
      } 
    });
  }
}
