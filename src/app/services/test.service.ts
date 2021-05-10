import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  transform!: string;
  
  

  constructor() { }

  public myFunc(transform: any) {
    console.log(transform);
    this.transform = 'translate(' + -100 + '%)';
    
  }
}
