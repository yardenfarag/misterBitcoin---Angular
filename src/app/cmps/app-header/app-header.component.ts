import { Component, ViewChild, Renderer2 } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent{

  constructor(
    private darkModeService: DarkModeService,
    private renderer: Renderer2
    ) {}

  @ViewChild('body') body:any;

  isDark = false
  isMenuOpen = false

  ngOnInit():void {
    const isDarkMode = this.darkModeService.checkDarkMode()
    this.isDark = isDarkMode
    this.isDark ? this.renderer.addClass(document.body, 'dark') : this.renderer.removeClass(document.body, 'dark')
  }

  toggleDarkMode() {
    this.isDark = !this.isDark
    this.darkModeService.savePrefs(this.isDark)
    this.renderer[this.isDark ? 'addClass' : 'removeClass'](document.body, 'dark')
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
