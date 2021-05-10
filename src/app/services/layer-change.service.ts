import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayerChangeService {

  z_indexChange!: number;

  constructor() { }

  changeLayer(z_indexChange: number) {
    console.log(z_indexChange);
    this.z_indexChange = 9;
  
  }
}
