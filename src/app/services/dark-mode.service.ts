import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  public darkMode = false;

  constructor() { }

  changeToDarkMode(){
    this.darkMode = true;
    }
}
