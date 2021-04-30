import { Component, OnInit, HostListener } from '@angular/core';
import { TestService } from '../services/test.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  default_bg = 'translate(' + -30 + '%)';
  direction = '';

  constructor(public test: TestService) { }

  ngOnInit(): void {
    window.addEventListener("wheel", () =>{
    
      this.changeBg();
    });
  }

  changeBg() {
    this.default_bg = 'translate(' + -100 + '%)'
  }

}
