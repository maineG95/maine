import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [ CommonModule,SignUpComponent, LoginComponent],
})
export class ModalComponent {
 @Output() closeModalEvent = new EventEmitter<void>(); // Event to close the modal
  @Output() switchToSignUpEvent = new EventEmitter<void>();  // Event to switch to SignUp
  @Output() switchToLoginEvent = new EventEmitter<void>();  // Event to switch to Login


  currentView: 'login' | 'signup' = 'login';  // Default view is Login

  // Close the modal
  close() {
    this.closeModalEvent.emit(); // Emit event to close modal
  }

  // Switch to Login view inside modal
  openLogin() {
    this.currentView = 'login';
  }

  // Switch to SignUp view inside modal
  openSignUp() {
    this.currentView = 'signup';
  }
}
