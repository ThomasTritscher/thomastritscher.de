import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  counter = 0;
  startWheel!: number;

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

      }

      if (this.counter == 2) {

      }

      if (this.counter == 3) {

      }
      // if(this.counter > 3){
      //   this.layer.secondWheelEvent();
      //   this.transformBg.switchBgToZero();
      // }

    });
  }
  

}
