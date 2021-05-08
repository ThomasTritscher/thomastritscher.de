import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  z_active = 9;
  z_inactiv = 0;
  o_active = 1;
  o_inactiv = 0;
  z_inactiv2 = 0;
  o_inactiv2 = 0;
  z_inactiv3 = 0;
  o_inactiv3 = 0;
  o_img_w = 0;
  defaultTranslateMinus = 'translate(' + -49 + '%)';
  defaultTranslatePlus = 'translate(' + +49 + '%)';
  firstText= 'translate3d(0px, 0%, 0px)';
  secondText = 'translate3d(0px, -250%, 0px)';
  thirdText = 'translate3d(0px, -250%, 0px)';
  fourthText = 'translate3d(0px, -250%, 0px)';
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("wheel", () =>{
      this.firstWheelEvent();
      this.translateFont();
    });
  }

  firstWheelEvent() {
    this.z_active = 0;
    this.z_inactiv = 9;
    this.o_active = 0;
    this.o_inactiv = 1;
    this.o_img_w = 1;
    this.defaultTranslateMinus = 'translate(' + -100 + '%)';
    this.defaultTranslatePlus = 'translate(' + +100 + '%)';
    this.secondText = 'translate3d(0px, 0%, 0px)';
  }
  
  
  secondWheelEvent() {
    this.o_inactiv = 0;
    this.z_inactiv = 0;
    this.z_inactiv2 = 9;
    this.o_inactiv2 = 1;
    this.defaultTranslateMinus = 'translate(' + +100 + '%)';
    this.defaultTranslatePlus = 'translate(' + -100 + '%)';
    this.secondText = 'translate3d(0px, -250%, 0px)';
    this.thirdText = 'translate3d(0px, 0%, 0px)';
  }
  thirdWheelEvent() {
    this.z_inactiv3 = 9;
    this.z_inactiv2 = 0;
    this.o_img_w = 0;
    this.thirdText = 'translate3d(0px, -250%, 0px)';
    this.fourthText = 'translate3d(0px, 0%, 0px)';
  }
  translateFont() {
    this.firstText = 'translate3d(0px, -250%, 0px)';
  }

  animateSection(){
    console.log(this.z_inactiv);
    this.z_inactiv = 9;
    console.log(this.z_inactiv);
  }

}
