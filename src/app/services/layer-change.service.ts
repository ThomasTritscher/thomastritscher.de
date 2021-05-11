import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayerChangeService {


  // var for section layers
  public z_active = 9;
  public z_inactive = 0;
  public o_active = 1;
  public o_inactive = 0;
  public z_inactive2 = 0;
  public o_inactive2 = 0;
  public z_inactive3 = 0;
  public o_inactive3 = 0;
  public o_img_w = 0;

  // var for curtain
  public translateCurtainMinus = 'translate(' + -49 + '%)';
  public translateCurtainPlus = 'translate(' + +49 + '%)';

  // var for text
  public firstText = 'translate3d(0px, 0%, 0px)';
  public secondText = 'translate3d(0px, -250%, 0px)';
  public thirdText = 'translate3d(0px, -250%, 0px)';
  public fourthText = 'translate3d(0px, -250%, 0px)';

  // var for scrollthint bar
  public default_length = 'translate(' + -30 + '%)';
  public default_length1 = 'translate(' + 0 + '%)';
  public default_length2 = 'translate(' + 0 + '%)';
  public default_length3 = 'translate(' + 0 + '%)';
  public runout = 'translateY(' + 0 + '%)';

  constructor() { }

  firstWheelEvent() {
    // var for section layers
    this.z_active = 0;
    this.z_inactive = 9;
    this.o_active = 0;
    this.o_inactive = 1;
    this.o_img_w = 1;
    // var for curtain
    this.translateCurtainMinus = 'translate(' + -100 + '%)';
    this.translateCurtainPlus = 'translate(' + +100 + '%)';

    // var for text
    this.secondText = 'translate3d(0px, 0%, 0px)';
    // var for scrollthint bar
    this.default_length = 'translate(' + 0 + '%)';
    this.default_length1 = 'translate(' + -30 + '%)';
  }

  secondWheelEvent() {
    // var for section layers
    this.o_inactive = 0;
    this.z_inactive = 0;
    this.z_inactive2 = 9;
    this.o_inactive2 = 1;
    // var for curtain
    this.translateCurtainMinus = 'translate(' + +100 + '%)';
    this.translateCurtainPlus = 'translate(' + -100 + '%)';

    // var for text
    this.secondText = 'translate3d(0px, -250%, 0px)';
    this.thirdText = 'translate3d(0px, 0%, 0px)';
    // var for scrollthint bar
    this.default_length1 = 'translate(' + 0 + '%)';
    this.default_length2 = 'translate(' + -30 + '%)';
  }
  thirdWheelEvent() {
    // var for section layers
    this.z_inactive3 = 9;
    this.z_inactive2 = 0;
    this.o_img_w = 0;

    // var for text
    this.thirdText = 'translate3d(0px, -250%, 0px)';
    this.fourthText = 'translate3d(0px, 0%, 0px)';
    // var for scrollthint bar
    this.default_length2 = 'translate(' + 0 + '%)';
    this.default_length3 = 'translate(' + -30 + '%)';
  }
  translateFont() {
    this.firstText = 'translate3d(0px, -250%, 0px)';
  }
  // var for scrollthint bar
  changeLength() {
    
    this.default_length3 = 'translate(' + 0 + '%)';
    this.runout = 'translateY(' + 100 + '%)';
  }


}
