import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputGroup, InputGroupModule,  } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-account',
  standalone: true,
  imports: [DialogModule,ButtonModule,InputGroupModule,FormsModule,InputTextModule,CalendarModule,CommonModule],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent {
  visible: boolean = false;
  value: string | undefined;

  date1: Date = new Date(); 

  showUPIDiv = false;


    showDialog() {
        this.visible = true;
    }
}
