import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile,',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profileForm:  FormGroup

  businessDetails = {
    name: '',
    phone: '',
    gstin: '',
    email: '',
    address: ''
  };

  ngOnInit() {
    const savedData = localStorage.getItem('businessDetails');
    if (savedData) {
      this.businessDetails = JSON.parse(savedData);
    }
  }
  saveChanges() {
    localStorage.setItem('businessDetails', JSON.stringify(this.businessDetails));
    alert('Data saved successfully!');
  }


  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      businessName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gstin: [''],
      email: ['', [Validators.required, Validators.email]],
      businessType: [''],
      businessCategory: ['Mobile & Accessories'],
      state: ['Maharashtra'],
      pincode: [''],
      businessAddress: [''],
      signature: [null]
    });
  }
  

  onSave() {
    if (this.profileForm.valid) {
      console.log('Profile Data:', this.profileForm.value);
    }
  }

  onCancel() {
    this.profileForm.reset();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profileForm.patchValue({ signature: file });
    }
  }

}
