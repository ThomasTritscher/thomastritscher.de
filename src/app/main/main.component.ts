import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, HostListener } from '@angular/core';
import { element } from 'protractor';
import { TransformBGService } from '../services/transform-bg.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  
  

  constructor(public transformBg: TransformBGService) { }

  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) =>{
      console.log("wheel" ,  event)
      // const showElem = event['path'][1];
      // this.initZIndex();
      // this.setZIndex(showElem, '9');
      this.transformBg.switchBgToZero();
    });
  }

  // initZIndex(){
  //   const elements = document.getElementsByClassName("test");
  //   Array.from(elements).forEach( (element: any) =>{
  //     element.style.zIndex = "0";
  //   });
  // }

  // setZIndex( elem: any, index: any){
  //   elem.style.zIndex = index;
  // }

 

}
