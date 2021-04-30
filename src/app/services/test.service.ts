import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public z_active = 9;
  public z_inactiv = 0;
  public o_active = 1;
  public o_inactiv = 0;
  public z_inactiv2 = 0;
  public o_inactiv2 = 0;
  public z_inactiv3 = 0;
  public o_inactiv3 = 0;
  public o_img_w = 0;
  public defaultTranslateMinus = 'translate(' + -49 + '%)';
  public defaultTranslatePlus = 'translate(' + +49 + '%)';

  constructor() { }

  public firstWheelEvent() {
    console.log(this.z_active);
    this.z_active = 0;
    this.z_inactiv = 9;
    this.o_active = 0;
    this.o_inactiv = 1;
    this.o_img_w = 1;
    this.defaultTranslateMinus = 'translate(' + -100 + '%)';
    this.defaultTranslatePlus = 'translate(' + +100 + '%)';
  }
  // myFunc(param: any) {
  //   console.log(param);
  // }
}
