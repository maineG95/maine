import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from "../../../features/modal/modal.component";
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../services/local-storage-service';
import { LogoutComponent } from "../logout/logout.component";

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent, LogoutComponent],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent {
  isModalVisible = false;
  isLogoutModalVisible = false; 
  currentView: 'login' | 'signup' = 'login'; 

  isLoggedIn: boolean = false;
  isMobileNavOpen = false;
  dropdownOpen = false; 
  mobileDropdownOpen = false; // Mobile dropdown state
  activeLink: string = '';  // To track the active link
 
  setActiveLink(link: string) {
    this.activeLink = link; // Set the active link
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
  }

  toggleDropdown(event: MouseEvent) {
    // Prevent clicking on the menu from closing immediately
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  toggleMobileDropdown(event: MouseEvent) {
    event.preventDefault();  // Prevent the default anchor behavior
    this.mobileDropdownOpen = !this.mobileDropdownOpen;  // Toggle the mobile dropdown menu
  }
   // Close the dropdown if clicked outside
  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: MouseEvent) {
    const dropdownElement = document.querySelector('.dropdown');
    if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
      this.dropdownOpen = false;
    }
  }


  constructor(
    private storage: LocalStorageService,
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
    this.currentView = 'login';  // Default to Login view
  }

  // Close the modal
  closeModalFromChild() {
    this.isModalVisible = false;
  }

  // Switch to SignUp view inside the modal
  openSignUp() {
    this.currentView = 'signup';
  }

  // Switch to Login view inside the modal
  openLogin() {
    this.currentView = 'login';
  }

  openLogout() {
    this.isLogoutModalVisible = true;  // Show the logout modal
  }

  closeLogoutModal() {
    this.isLogoutModalVisible = false;  // Close the logout modal
  }
}
