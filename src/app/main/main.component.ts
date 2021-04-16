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


  layer = true;


  changeLayers() {
    this.layer = false;

  }
  changeBg() {
    document.getElementById('bg-left')?.classList.add('transform-bg');
  }
}
