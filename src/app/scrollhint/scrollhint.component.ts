import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollhint',
  templateUrl: './scrollhint.component.html',
  styleUrls: ['./scrollhint.component.scss']
})
export class ScrollhintComponent implements OnInit {

  default_length = 'translate(' + 0 + '%)';

  constructor() { }

  ngOnInit(): void {
  }

  changeLength() {
    this.default_length = 'translate(' + -30 + '%)'
  
  }

}
