import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  switch_bg = 'translate(' + -30 + '%)';
  

  constructor() { }

  ngOnInit(): void {
  }

  changeBg() {
    this.switch_bg = 'translate(' + -100 + '%)'
  
  }
 


}
