import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { LocalStorageService } from '../../../core/components/services/local-storage-service';
import { SweetAlert2Service } from '../../../core/components/services/sweet_alert2';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule,CommonModule],  // Add ReactiveFormsModule here
})
export class LoginComponent {

  @Output() switchToSignUpEvent = new EventEmitter<void>();  // Emit event to parent when clicking Sign Up

  loginForm: FormGroup;
  isLoggedIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private storage: LocalStorageService,
    private swal: SweetAlert2Service
  ) {
    this.loginForm = this.formBuilder.group({
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const loggedIn = this.storage.get('isLoggedIn');
    if (loggedIn === 'true') {
      this.isLoggedIn = true;
    }
  }

    get loginControl() {
    return this.loginForm.controls;
  }

  loginFormCtrl(name: string) {
    return this.loginForm.get(name);
  }


  submitLoginForm() {
    const { mobileNumber, password } = this.loginForm.value;

    const storedUsers = JSON.parse(localStorage.getItem('accounts') || '[]');
    
    const user = storedUsers.find((user: any) => user.mobileNumber === mobileNumber && user.password === password);

    if (user) {
      this.storage.set('mobileNumber', mobileNumber);
      this.storage.set('isLoggedIn', 'true');
      this.isLoggedIn = true;
      this.swal.toastInfo('Log in Success!');

      setTimeout(() => {
        // this.router.navigate([`${myRouter.home.path}`]).then(() => {
        //   window.location.reload();
        // });
      }, 1000);
    } else {
      this.swal.toastInfo('Invalid Credentials!');
    }
  }

    // Handle the event when the "Sign Up" button is clicked
  switchToSignUp() {
    this.switchToSignUpEvent.emit();  // Emit event to switch to SignUp in the parent
  }
}