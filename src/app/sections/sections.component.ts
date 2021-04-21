import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  secondWheelEvent() {
    document.getElementById('s2')?.classList.remove('active');
    document.getElementById('s3')?.classList.add('active');
    document.getElementById('img-w-bg2')?.classList.add('o-active');
    document.getElementById('img-w-bg')?.classList.remove('o-active');
    document.getElementById('c-l')?.classList.add('c-inactive');
    document.getElementById('c-r')?.classList.add('c-active')
    
    
  }
  thirdWheelEvent() {
    document.getElementById('s3')?.classList.remove('active');
    document.getElementById('s4')?.classList.add('active');
  }
  
}
