import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-party',
  standalone: true,
  imports: [TabsModule,CommonModule,TabViewModule,DropdownModule,InputTextModule,ButtonModule,ReactiveFormsModule],
  templateUrl: './add-party.component.html',
  styleUrl: './add-party.component.css'
})
export class AddPartyComponent {
  partyForm: FormGroup;
  showShipping = false;

  gstTypes = [
    { label: 'Unregistered/Consumer', value: 'unregistered' },
    { label: 'Registered Business', value: 'registered' }
  ];

  states = [
    { label: 'Maharashtra', value: 'MH' },
    { label: 'Gujarat', value: 'GJ' },
    // Add more states
  ];

  constructor(private fb: FormBuilder) {
    this.partyForm = this.fb.group({
      partyName: [''],
      gstin: [''],
      phone: [''],
      gstType: [''],
      state: [''],
      email: [''],
      billingAddress: [''],
      shippingAddress: ['']
    });
  }

  toggleShipping() {
    this.showShipping = !this.showShipping;
  }

  save(addNew: boolean) {
    console.log(this.partyForm.value);
    if (addNew) {
      this.partyForm.reset();
    }
  }
}
