import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-parties',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './all-parties.component.html',
  styleUrl: './all-parties.component.css'
})
export class AllPartiesComponent {
  partyList = [
    { name: 'Laptop', email: '', phone: '', receivable: 0, payable: 0, selected: false },
    { name: 'Laptop solution', email: '', phone: '', receivable: 3218, payable: 0, selected: false },
    { name: 'mob', email: '', phone: '', receivable: 23000, payable: 0, selected: false },
    { name: 'mobail shop', email: '', phone: '789098765', receivable: 1000, payable: 0, selected: false },
    { name: 'mobails', email: '', phone: '', receivable: 400, payable: 0, selected: false },
    { name: 'omkar', email: 'omkar@gmail.com', phone: '7887468393', receivable: 0, payable: 12000, selected: false },
    { name: 'ram pat', email: '', phone: '7887579484', receivable: 0, payable: 0, selected: false },
    { name: 'ram patil', email: '', phone: '', receivable: 0, payable: 0, selected: false },
    { name: 'viki patil', email: '', phone: '', receivable: 1200, payable: 0, selected: false }
  ];

  totalReceivable = 0;
  totalPayable = 0;

  ngOnInit(): void {
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalReceivable = this.partyList.reduce((sum, p) => sum + (p.receivable || 0), 0);
    this.totalPayable = this.partyList.reduce((sum, p) => sum + (p.payable || 0), 0);
  }

  selectAll: boolean = false;

toggleAllSelection() {
  this.partyList.forEach(party => party.selected = this.selectAll);
}

ngDoCheck() {
  this.selectAll = this.partyList.every(p => p.selected);
}
}
