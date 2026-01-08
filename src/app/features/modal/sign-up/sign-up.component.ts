import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { LocalStorageService } from '../../../core/components/services/local-storage-service';
import { SweetAlert2Service } from '../../../core/components/services/sweet_alert2';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  imports: [ReactiveFormsModule,CommonModule],  
})
export class SignUpComponent {
  @Output() switchToLoginEvent = new EventEmitter<void>();  // Emit event to parent to switch to Login view

  goBackToLogin() {
    this.switchToLoginEvent.emit();  // Emit event to switch to Login in the parent
  }

 submitted = false;
 registerForm: FormGroup;
 statusMessage: string = '';  

 constructor(
    private formBuilder: FormBuilder, 
    private storage: LocalStorageService,
    private swal: SweetAlert2Service
  ) {
     this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern(/^(09|\+639|\+63|639)[0-9]{9}$/) 
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      confirmPassword: ['', [Validators.required, this.matchPasswords.bind(this)]],
    });
  }

  
  ngOnInit(): void {
  }

    matchPasswords(control: any): { [key: string]: boolean } | null {
    if (this.registerForm && control.value !== this.registerForm.get('password')?.value) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  get registerControl() {
    return this.registerForm.controls;
  }

  registerFormCtrl(name: string) {
    return this.registerForm.get(name);
  }
  
  submitRegisterForm() {
    this.submitted = true; 
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      const existingAccount = this.checkIfAccountExists(formData.mobileNumber);

      if (existingAccount) {
        this.statusMessage = 'Account already exists. Please use a different mobile number .';
      } else {
        this.storeAccount(formData);
        this.statusMessage = 'Account successfully registered!';

        this.registerForm.reset();

       setTimeout(() => {
          this.goBackToLogin() ;
        }, 1000);
      }
    } else {
      this.statusMessage = 'Please fill in all fields correctly.';
    }
  }


  checkIfAccountExists(mobileNumber: string): boolean {
    const existingAccounts = JSON.parse(localStorage.getItem('accounts') || '[]');
    return existingAccounts.some((account: { mobileNumber: string; }) => account.mobileNumber === mobileNumber);
  }

  storeAccount(formData: any): void {
    const existingAccounts = JSON.parse(localStorage.getItem('accounts') || '[]');
    existingAccounts.push(formData);
    localStorage.setItem('accounts', JSON.stringify(existingAccounts));
  }
  
}