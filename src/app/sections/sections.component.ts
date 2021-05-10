import { Component, OnInit } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  z_active = 9;
  z_inactive = 0;
  o_active = 1;
  o_inactive = 0;
  z_inactive2 = 0;
  o_inactive2 = 0;
  z_inactive3 = 0;
  o_inactive3 = 0;
  o_img_w = 0;
  defaultTranslateMinus = 'translate(' + -49 + '%)';
  defaultTranslatePlus = 'translate(' + +49 + '%)';
  firstText= 'translate3d(0px, 0%, 0px)';
  secondText = 'translate3d(0px, -250%, 0px)';
  thirdText = 'translate3d(0px, -250%, 0px)';
  fourthText = 'translate3d(0px, -250%, 0px)';
  z_indexChange = 0;


  constructor(public layer: LayerChangeService) { }

  ngOnInit(): void {
    window.addEventListener("wheel", () =>{
      this.firstWheelEvent();
      this.translateFont();
    });
  }

  firstWheelEvent() {
    this.z_active = 0;
    this.z_inactive = 9;
    this.o_active = 0;
    this.o_inactive = 1;
    this.o_img_w = 1;
    this.defaultTranslateMinus = 'translate(' + -100 + '%)';
    this.defaultTranslatePlus = 'translate(' + +100 + '%)';
    this.secondText = 'translate3d(0px, 0%, 0px)';
  }
  
  
  secondWheelEvent() {
    this.o_inactive = 0;
    this.z_inactive = 0;
    this.z_inactive2 = 9;
    this.o_inactive2 = 1;
    this.defaultTranslateMinus = 'translate(' + +100 + '%)';
    this.defaultTranslatePlus = 'translate(' + -100 + '%)';
    this.secondText = 'translate3d(0px, -250%, 0px)';
    this.thirdText = 'translate3d(0px, 0%, 0px)';
  }
  thirdWheelEvent() {
    this.z_inactive3 = 9;
    this.z_inactive2 = 0;
    this.o_img_w = 0;
    this.thirdText = 'translate3d(0px, -250%, 0px)';
    this.fourthText = 'translate3d(0px, 0%, 0px)';
  }
  translateFont() {
    this.firstText = 'translate3d(0px, -250%, 0px)';
  }

  animateSection(){
    console.log(this.z_inactive);
    this.z_inactive = 9;
    console.log(this.z_inactive);
  }

}
