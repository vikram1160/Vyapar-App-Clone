// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../login/auth.service';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule,CommonModule,ReactiveFormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
//   providers: [AuthService]
// })
// export class LoginComponent {
//  loginObj: any = {
//     EmailId: '',
//     password: '',
//   };

//   loginForm: any;

//    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: [''],
//       password: ['']
//     });
//   }

// onLogin() {
//   const credentials = this.loginForm.value;

//   if (this.loginForm.valid) {
//     this.authService.login(credentials).subscribe({
//       next: (res) => {
//         if (res && res.token) {
//           localStorage.setItem('token', res.token);
//           this.router.navigate(['/home']);
//           alert('Login successful!');
//         } else {
//           alert('Login failed: Invalid response');
//         }
//       }
//     });
//   } else {
//     alert('Please fill in all required fields correctly.');
//   }
// }

  


//   login() {
//     if (this.loginObj.EmailId === 'vikram@gmail.com' && this.loginObj.password === 'vikram123') {
//    this.router.navigate(['/home'])
//     } else {
//       alert('Invalid EmailId or password')
//     }

//   };

//   onSubmit() {
//     console.log('Form Submitted');
//   }
  //  }
 