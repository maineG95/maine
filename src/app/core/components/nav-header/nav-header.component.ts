import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  mobileDropdownOpen = false; 
  activeLink: string = ''; 
 
  setActiveLink(link: string) {
    this.activeLink = link; 
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  toggleMobileDropdown(event: MouseEvent) {
    event.preventDefault();  
    this.mobileDropdownOpen = !this.mobileDropdownOpen;  
  }
  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: MouseEvent) {
    const dropdownElement = document.querySelector('.dropdown');
    if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
      this.dropdownOpen = false;
    }
  }

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
    this.closeMobileNav(); 
  }

  closeModalFromChild() {
    this.isModalVisible = false;
  }

  openSignUp() {
    this.currentView = 'signup';
  }

  openLogin() {
    this.currentView = 'login';
  }

  openLogout() {
    this.isLogoutModalVisible = true;  
     this.closeMobileNav(); 
  }

  closeLogoutModal() {
    this.isLogoutModalVisible = false;  
  }

  checkLoginAndNavigate(event: MouseEvent, route: string) {
    event.preventDefault(); // Prevent default navigation
    
    if (this.isLoggedIn) {
      this.router.navigate([route]);
      this.isMobileNavOpen = false;
    } else {
      this.router.navigate(['']);
      this.openModal();
    }
  }
  handleLogout() {
    this.isLoggedIn = false;
    this.isLogoutModalVisible = false;
    this.dropdownOpen = false;
    this.mobileDropdownOpen = false;
    this.router.navigate(['/']);
  }
}