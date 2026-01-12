import { Component, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../../../core/components/services/local-storage-service';
import { SweetAlert2Service } from '../../../core/components/services/sweet_alert2';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  @Output() closeModalEvent = new EventEmitter<void>(); // Output to close the modal
  @Output() loggedOut = new EventEmitter<void>();

   isLoggedIn: boolean = false;

    constructor(
    private storage: LocalStorageService,
    private swal: SweetAlert2Service,
     private router: Router 
  ) { }

   ngOnInit(): void {
    const loggedIn = this.storage.get('isLoggedIn');
    if (loggedIn === 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
  this.storage.remove('isLoggedIn');
  this.storage.remove('username');
  this.isLoggedIn = false;

  this.swal.toastInfo('Logged out successfully!');

  setTimeout(() => {
    this.loggedOut.emit();   // 🔥 notify parent
    this.closeModalEvent.emit(); // close modal
  }, 500);
}


  close() {
    this.closeModalEvent.emit(); // Emit event to close modal
  }
}