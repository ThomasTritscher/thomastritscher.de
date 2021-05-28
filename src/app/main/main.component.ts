import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';
import { LayerChangeService } from '../services/layer-change.service';
import { TransformBGService } from '../services/transform-bg.service';
import { TransitionBgService } from '../services/transition-bg.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


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


  counter = 0;
  startWheel!: number;

  constructor(public transformBg: TransformBGService, public layer: LayerChangeService, public translate: TransitionBgService) { }

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
        this.transformBg.switchBgToZero();
        this.layer.firstWheelEvent();
      }

      if (this.counter == 2) {
        this.layer.secondWheelEvent();
      }

      if (this.counter == 3) {
        this.layer.thirdWheelEvent();
        this.transformBg.switchBgToFull();
      }
      // if(this.counter > 3){
      //   this.layer.secondWheelEvent();
      //   this.transformBg.switchBgToZero();
      // }

    });
  }
}
