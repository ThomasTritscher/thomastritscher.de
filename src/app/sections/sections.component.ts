import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  z_active = 11;
  z_inactiv = 0;
  o_active = 1;
  o_inactiv = 0;
  transformToZero = 'translate(' + -49 + '%)';
  transformTo100 = 'translate(' + +49 + '%)';

  constructor() { }

  ngOnInit(): void {
  }

  firstWheelEvent() {
    this.z_active = 0;
    this.z_inactiv = 9;
    this.o_active = 0;
    this.o_inactiv = 1;
    this.transformToZero = 'translate(' + -100 + '%)';
    this.transformTo100 = 'translate(' + +100 + '%)';
  }
  
  
  secondWheelEvent() {
    // document.getElementById('s2')?.classList.remove('active');
    // document.getElementById('s3')?.classList.add('active');
    // document.getElementById('img-w-bg2')?.classList.add('o-active');
    // document.getElementById('img-w-bg')?.classList.remove('o-active');
    // document.getElementById('c-l')?.classList.add('c-inactive');
    // document.getElementById('c-r')?.classList.add('c-active')


  }
  thirdWheelEvent() {
    // document.getElementById('s3')?.classList.remove('active');
    // document.getElementById('s4')?.classList.add('active');
  }

}
