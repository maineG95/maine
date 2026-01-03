import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent {
 isLoggedIn = true;
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
}
