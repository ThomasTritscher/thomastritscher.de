import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

 
  myFunc(param: any) {
    console.log(param);
  }
}
