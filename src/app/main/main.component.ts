import { Component, OnInit, HostListener } from '@angular/core';
import { element } from 'protractor';
import { TestService } from '../services/test.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  default_bg = 'translate(' + -30 + '%)';
  

  constructor(public test: TestService) { }

  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) =>{
      const showElem = event['path'][0];
      this.initZIndex();
      this.setZIndex(showElem, '9');
      this.changeBg();
    });
  }

  initZIndex(){
    const elements = document.getElementsByClassName("test");
    Array.from(elements).forEach( (element: any) =>{
      element.style.zIndex = "0";
    });
  }

  setZIndex( elem: any, index: any){
    elem.style.zIndex = index;
  }

  changeBg() {
    this.default_bg = 'translate(' + -100 + '%)'
  }

}
