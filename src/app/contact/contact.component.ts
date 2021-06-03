import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Cursor follower
  @ViewChild('cursor')
  cursor!: ElementRef;
  @ViewChild('cursor2')
  cursor2!: ElementRef;

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', e => {
      this.cursor.nativeElement.style.cssText = this.cursor2.nativeElement.style.cssText =
        'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
    });
  }

  //End cursor follower

  counter = 0;
  startWheel!: number;

  //var for Layers
  z_active = 9;
  z_inactive = 0;
  z_inactive2 = 0;
  z_inactive3 = -1;

  //var for text translate
  firstText = 'translate3d(0px, 0%, 0px)';
  secondText = 'translate3d(0px, -145%, 0px)';
  thirdText = 'translate3d(0px, -145%, 0px)';
  fourthText = 'translate3d(0px, -145%, 0px)';

  defaultImgPosition = 'translate3d(0px, -600px, 0px)';



  constructor() { }

  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) => {

      if (this.startWheel === undefined) {
        this.startWheel = event.timeStamp;
      }
      let elapse = Math.trunc(event.timeStamp - this.startWheel);


      if (elapse > 300) {
        this.startWheel = event.timeStamp;
        this.counter++;
        console.log(this.counter);

      }

      if (this.counter < 2) {
        this.firstWheelEvent();
      }

      if (this.counter == 2) {
        this.secondWheelEvent();
      }

      if (this.counter == 3) {
        this.thirdWheelEvent();

      }
      // if(this.counter > 3){
      //   this.layer.secondWheelEvent();
      //   this.transformBg.switchBgToZero();
      // }

    });
  }

  firstWheelEvent() {
    this.z_active = 0;
    this.z_inactive = 9;
    this.firstText = 'translate3d(0px, -145%, 0px)';
    this.secondText = 'translate3d(0px, 0%, 0px)';

  }
  secondWheelEvent() {
    this.z_inactive = 0;
    this.z_inactive2 = 9;
    this.secondText = 'translate3d(0px, -145%, 0px)';
    this.thirdText = 'translate3d(0px, 0%, 0px)';
    this.defaultImgPosition = 'translate3d(0px, 0px, 0px)';
   
  }
  thirdWheelEvent() {
    this.z_inactive2 = 0;
    this.z_inactive3 = 9;
    this.thirdText = 'translate3d(0px, -145%, 0px)';
    this.fourthText = 'translate3d(0px, 0%, 0px)';
    this.defaultImgPosition = 'translate3d(0px, -600px, 0px)';
    
  }


}
