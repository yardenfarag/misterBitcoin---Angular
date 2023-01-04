import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const MODE_KEY = 'darkMode'

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor(private storageService: StorageService) { }

  savePrefs(isDark:boolean) {
    this.storageService.store(MODE_KEY, isDark)
  }

  checkDarkMode() {
    const isDark = this.storageService.load(MODE_KEY)
    if (isDark) return true
    return false
  }
}
