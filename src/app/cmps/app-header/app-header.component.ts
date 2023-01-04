import { Component, Output, EventEmitter } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent{

  constructor(private darkModeService: DarkModeService) {}

  isDark = false
  isMenuOpen = false

  ngOnInit():void {
    const isDarkMode = this.darkModeService.checkDarkMode()
    this.isDark = isDarkMode
    this.isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }

  toggleDarkMode() {
    this.isDark = !this.isDark
    this.darkModeService.savePrefs(this.isDark)
    document.body.classList.toggle('dark')
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
