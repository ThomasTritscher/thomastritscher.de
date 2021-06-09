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

  // var for h-nav
  public navPoint_text = 'translate3d(0px, 0%, 0px)';
  public navPoint_text1 = 'translate3d(0px, 0%, 0px)';

  public img_opacity = 1;

  constructor() { }

  backToStartScreen() {
    this.z_active = 9;
    this.z_inactive = 0;
    this.o_active = 1;
    this.o_inactive = 0;
    this.z_inactive2 = 0;
    this.o_inactive2 = 0;
    this.z_inactive3 = 0;
    this.o_inactive3 = 0;
    this.o_img_w = 0;

    // var for curtain
    this.translateCurtainMinus = 'translate(' + -49 + '%)';
    this.translateCurtainPlus = 'translate(' + +49 + '%)';

    // var for text
    this.firstText = 'translate3d(0px, 0%, 0px)';
    this.secondText = 'translate3d(0px, -250%, 0px)';
    this.thirdText = 'translate3d(0px, -250%, 0px)';
    this.fourthText = 'translate3d(0px, -250%, 0px)';

    // var for scrollthint bar
    this.default_length = 'translate(' + -30 + '%)';
    this.default_length1 = 'translate(' + 0 + '%)';
    this.default_length2 = 'translate(' + 0 + '%)';
    this.default_length3 = 'translate(' + 0 + '%)';
    this.runout = 'translateY(' + 0 + '%)';

    // var for h-nav
    this.navPoint_text = 'translate3d(0px, 0%, 0px)';
    this.navPoint_text1 = 'translate3d(0px, 0%, 0px)';

    this.img_opacity = 1;
  }

  firstWheelEvent() {
    this.switchLayerZIndex();
    this.switchLayerOpacity();
    this.translateCurtain();
    this.translateText();
    this.translateScrollhintBar();
    this.changeLength();
    this.scrollSpan();
    this.changeNav();
    this.translateFont();
    this.changeHImg();
  }

  secondWheelEvent() {
    this.switchLayer2ZIndex();
    this.switchLayer2Opacity();
    this.translateCurtainOut();
    this.translateText2();
    this.translateScrollhintBar2();
    this.changeNav2();
  }
  thirdWheelEvent() {
    this.switchLayer3ZIndex();
    this.switchLayer3Opacity();
    this.translateText3();
    this.translateScrollhintBar3();
    this.changeNav3();
  }

  //first wheel event
  switchLayerZIndex() {
    this.z_active = 0;
    this.z_inactive = 9;
    this.z_inactive2 = 0;
    this.z_inactive3 = 0;
  }
  switchLayerOpacity() {
    this.o_active = 0;
    this.o_inactive = 1;
    this.o_img_w = 1;
    this.o_inactive2 = 0;
    this.o_inactive3 = 0;
  }
  translateCurtain() {
    this.translateCurtainMinus = 'translate(' + -100 + '%)';
    this.translateCurtainPlus = 'translate(' + +100 + '%)';
  }
  translateText() {
    this.secondText = 'translate3d(0px, 0%, 0px)';
    this.firstText = 'translate3d(0px, 0%, 0px)';
    this.thirdText = 'translate3d(0px, -250%, 0px)';
    this.fourthText = 'translate3d(0px, -250%, 0px)';
  }
  translateScrollhintBar() {
    this.default_length = 'translate(' + 0 + '%)';
    this.default_length1 = 'translate(' + -30 + '%)';
    this.default_length2 = 'translate(' + 0 + '%)';
    this.default_length3 = 'translate(' + 0 + '%)';
  }
  //second wheel event
  switchLayer2ZIndex() {
    this.z_inactive = 0;
    this.z_inactive2 = 9;
    this.z_inactive3 = 0;
  }
  switchLayer2Opacity() {
    this.o_inactive = 0;
    this.o_inactive2 = 1;
    this.o_inactive3 = 0;
    this.o_img_w = 9;
  }
  translateCurtainOut() {
    this.translateCurtainMinus = 'translate(' + +100 + '%)';
    this.translateCurtainPlus = 'translate(' + -100 + '%)';
  }
  translateText2() {
    this.secondText = 'translate3d(0px, -250%, 0px)';
    this.thirdText = 'translate3d(0px, 0%, 0px)';
    this.fourthText = 'translate3d(0px, -250%, 0px)';
  }
  translateScrollhintBar2() {
    this.default_length = 'translate(' + 0 + '%)';
    this.default_length1 = 'translate(' + 0 + '%)';
    this.default_length2 = 'translate(' + -30 + '%)';
    this.default_length3 = 'translate(' + 0 + '%)';
  }
  //third wheel event
  switchLayer3ZIndex() {
    this.z_inactive3 = 9;
    this.z_inactive2 = 0;
    this.z_inactive = 0;
  }
  switchLayer3Opacity() {
    this.o_img_w = 0;
  }
  translateText3() {
    this.firstText = 'translate3d(0px, -250%, 0px)';
    this.secondText = 'translate3d(0px, -250%, 0px)';
    this.thirdText = 'translate3d(0px, -250%, 0px)';
    this.fourthText = 'translate3d(0px, 0%, 0px)';
  }
  translateScrollhintBar3() {
    this.default_length = 'translate(' + 0 + '%)';
    this.default_length1 = 'translate(' + 0 + '%)';
    this.default_length2 = 'translate(' + 0 + '%)';
    this.default_length3 = 'translate(' + -30 + '%)';
  }

  translateFont() {
    this.firstText = 'translate3d(0px, -250%, 0px)';
  }
  // var for scrollthint bar
  changeLength() {
    this.default_length3 = 'translate(' + 0 + '%)';
  }
  scrollSpan() {
    this.runout = 'translateY(' + 100 + '%)';
  }
  changeNav() {
    this.navPoint_text = 'translate3d(0px, -25%, 0px)';
    this.navPoint_text1 = 'translate3d(0px, -175%, 0px)';
  }
  changeNav2() {
    this.navPoint_text = 'translate3d(0px, -50%, 0px)';
  }
  changeNav3() {
    this.navPoint_text = 'translate3d(0px, -75%, 0px)';
  }
  changeHImg() {
    this.img_opacity = 0;
  }


}
