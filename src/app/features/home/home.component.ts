import { Component } from '@angular/core';
import { LocalStorageService } from '../../core/components/services/local-storage-service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isLoggedIn: boolean = false;
  isModalVisible = false;
  currentView: 'login' | 'signup' = 'login'; 

 constructor(
    private storage: LocalStorageService,
     private router: Router
  ) {}
  
   ngOnInit(): void {
    const loggedIn = this.storage.get('isLoggedIn');
    if (loggedIn === 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  openModal() {
    this.isModalVisible = true;
    this.currentView = 'login'; 
  }

  viewResume(event: MouseEvent) {
  event.preventDefault();

  if (this.isLoggedIn) {
    window.open('resume.pdf', '_blank');
  } else {
    this.openModal();
  }
}


  closeModalFromChild() {
    this.isModalVisible = false;
  }

   openSignUp() {
    this.currentView = 'signup';
  }

}
