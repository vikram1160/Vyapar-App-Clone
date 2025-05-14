import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sync-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sync-share.component.html',
  styleUrl: './sync-share.component.css'
})
export class SyncShareComponent {

  constructor(private router: Router) {}

  goToUserActivity() {
    this.router.navigate(['/userActivity']);
  }
}
