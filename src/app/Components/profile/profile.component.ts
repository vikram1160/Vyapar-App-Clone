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

  profileForm: FormGroup;
  signatureFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      businessName: [''],
      phoneNumber: [''],
      gstin: [''],
      email: [''],
      businessType: [''],
      businessCategory: [''],
      state: [''],
      pincode: [''],
      businessAddress: ['']
    });
  }

  onFileSelected(event: any) {
    this.signatureFile = event.target.files[0] || null;
  }
  
  ngOnInit(): void {
    const savedData = localStorage.getItem('businessProfile');
    if (savedData) {
      this.profileForm.patchValue(JSON.parse(savedData));
    }
  }

  
  onSave() {
    const formData = this.profileForm.value;

    if (this.signatureFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Signature = reader.result as string;
        const finalData = {
          ...formData,
          signature: base64Signature
        };
        localStorage.setItem('businessProfile', JSON.stringify(finalData));
        alert('Form data saved to local storage!');
      };
      reader.readAsDataURL(this.signatureFile);
    } else {
      localStorage.setItem('businessProfile', JSON.stringify(formData));
      alert('Form data saved to local storage!');
    }
  }

  onCancel() {
    this.profileForm.reset();
    this.signatureFile = null;
    alert('Form cleared!');
  }


}


