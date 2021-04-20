import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  

  // layer = true;


  // changeLayers() {
  //   this.layer = false;

  // }
  changeBg() {
    document.getElementById('bg-left')?.classList.add('transform-bg');
  }

  firstWheelroll() {
    document.getElementById('s1')?.classList.remove('active');
    document.getElementById('s2')?.classList.add('active');
    document.getElementById('img-w')?.classList.add('o-active');
    document.getElementById('img-w-bg')?.classList.add('o-active');
    document.getElementById('a-w')?.classList.add('o-active');
    document.getElementById('c-l')?.classList.add('c-active');
    document.getElementById('c-r')?.classList.add('c-inactive')
    
  }
  secondWheelroll() {
    document.getElementById('s2')?.classList.remove('active');
    document.getElementById('s3')?.classList.add('active');
    
  }
  thirdWheelroll() {
    document.getElementById('s3')?.classList.remove('active');
    document.getElementById('s4')?.classList.add('active');
  }

}
