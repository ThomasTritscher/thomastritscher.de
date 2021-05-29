import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements OnInit {
  
  
  translateValue = 'translate(0px, 0px, 0px)'

  constructor() { }

  ngOnInit(): void {
  }

}
