import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements OnInit {
  
  translateValue = 'translate3d(0px, 0%, 0px)';
  offSet = 0;
  constructor() { }
  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) => {
      console.log("SCROLLING");
      if (event.deltaY < 0) {
        console.log('scrolling up');
        this.offSet++;
      } else if (event.deltaY > 0) {
        console.log('scrolling down');
        this.offSet--;
      }
      this.scroll();
    });
  }
  scroll() {
    this.translateValue = `translate3d(0px, ${this.offSet}%, 0px)`;
    
  }
}
  
 

 

