import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, HostListener } from '@angular/core';
import { element } from 'protractor';
import { LayerChangeService } from '../services/layer-change.service';
import { TransformBGService } from '../services/transform-bg.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  // timeBetweenWheels = 1000;
  counter = 0;
  startWheel!: number;
  img_opacity = 1;
  

  constructor(public transformBg: TransformBGService , public layer: LayerChangeService) { }

  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) =>{

      if(this.startWheel === undefined){
        this.startWheel = event.timeStamp;
      }
      let elapse = Math.trunc(event.timeStamp - this.startWheel);
      
     
      if(elapse > 300){
        this.startWheel = event.timeStamp;
        this.counter++;
      }
      
      if(this.counter < 2){
        this.transformBg.switchBgToZero();
        this.layer.firstWheelEvent();
      }

      if(this.counter == 2){
        this.layer.secondWheelEvent();
      }

      if(this.counter == 3){
        this.layer.thirdWheelEvent();
        this.transformBg.switchBgToFull();
      }
     
    });
  }
}
