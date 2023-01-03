import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  isDark = false
  isMenuOpen = false

  toggleDarkMode() {
    this.isDark = !this.isDark
    document.body.classList.toggle('dark')
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
