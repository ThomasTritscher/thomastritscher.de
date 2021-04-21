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

  changeBg() {
    document.getElementById('bg-left')?.classList.add('transform-bg');
  
  }
  firstWheelEvent() {
    document.getElementById('s1')?.classList.remove('active');
    document.getElementById('s2')?.classList.add('active');
    document.getElementById('img-w')?.classList.add('o-active');
    document.getElementById('img-w-bg')?.classList.add('o-active');
    document.getElementById('a-w')?.classList.add('o-active');
    document.getElementById('c-l')?.classList.add('c-active');
    document.getElementById('c-r')?.classList.add('c-inactive')
    
  }


  

}
