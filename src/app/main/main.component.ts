import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';
import { LayerChangeService } from '../services/layer-change.service';
import { TransformBGService } from '../services/transform-bg.service';
import { TransitionBgService } from '../services/transition-bg.service';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('load', [
      transition(':enter', [
        style({ opacity: 1 }),
        animate('2.5s ease-in-out', style({ opacity: 0 }))
      ]),
    ]),
  ]
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

  //End cursor follower



  constructor(public transformBg: TransformBGService, public layer: LayerChangeService, public translate: TransitionBgService) { }

  counter = 0;

  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) => {
      console.log(this.counter);
      if (event.deltaY < 0) {
        console.log('scrolling up');
        this.counter--;
      } else if (event.deltaY > 0) {
        console.log('scrolling down');
        this.counter++;

      }

      if (this.counter < 2) {
        this.transformBg.startBg();
        this.layer.backToStartScreen();
      }



      if (this.counter == 3) {
        this.transformBg.switchBgToZero();
        this.layer.firstWheelEvent();
      }



      if (this.counter == 5) {
        this.layer.secondWheelEvent();
        this.transformBg.switchBgToZero();
      }


      if (this.counter == 7) {
        this.layer.thirdWheelEvent();
        this.transformBg.switchBgToFull();
      }


      if (this.counter > 8) {
        this.counter = 0;
        this.transformBg.startBg();
        this.layer.backToStartScreen();
      }


      if (this.counter < 0) {
        this.counter = 0;
      }
    });

  }
}

