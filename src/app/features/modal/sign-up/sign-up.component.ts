import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  template: `
    <h2>Sign Up Form</h2>
    <form>
      <!-- Your sign-up form here -->
    </form>
    <!-- Button to go back to login -->
    <button type="button" (click)="goBackToLogin()">Go back to Login</button>
  `,
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  @Output() switchToLoginEvent = new EventEmitter<void>();  // Emit event to parent to switch to Login view

  goBackToLogin() {
    this.switchToLoginEvent.emit();  // Emit event to switch to Login in the parent
  }
}
