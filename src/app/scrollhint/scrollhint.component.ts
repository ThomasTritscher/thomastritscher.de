import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollhint',
  templateUrl: './scrollhint.component.html',
  styleUrls: ['./scrollhint.component.scss']
})
export class ScrollhintComponent implements OnInit {

  default_length = 'translate(' + 0 + '%)';
  default_length1 = 'translate(' + 0 + '%)';
  default_length2 = 'translate(' + 0 + '%)';
  default_length3 = 'translate(' + 0 + '%)';
  runout = 'translateY(' + 0 + '%)';

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("wheel", () =>{
      this.changeLength();
    });
  }

  changeLength() {
    this.default_length = 'translate(' + -30 + '%)';
    this.default_length3 = 'translate(' + 0 + '%)';
    this.runout = 'translateY(' + 100 + '%)';
  }
  wheelEvent() {
    this.default_length = 'translate(' + 0 + '%)';
    this.default_length1 = 'translate(' + -30 + '%)';
    
  }
  wheelEventtwo() {
    this.default_length1 = 'translate(' + 0 + '%)';
    this.default_length2 = 'translate(' + -30 + '%)';
  }
  wheelEventthree() {
    this.default_length2 = 'translate(' + 0 + '%)';
    this.default_length3 = 'translate(' + -30 + '%)';
  }
 

}
