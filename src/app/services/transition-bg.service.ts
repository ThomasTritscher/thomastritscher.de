import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransitionBgService {

  public transitionOpacity = 0;

  constructor() { }

  transitionBg() {
    this.transitionOpacity = 1;
    console.log(this.transitionOpacity)
  }
}
