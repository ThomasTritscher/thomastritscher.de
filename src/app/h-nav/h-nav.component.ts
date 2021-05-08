import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-nav',
  templateUrl: './h-nav.component.html',
  styleUrls: ['./h-nav.component.scss']
})
export class HNavComponent implements OnInit {

  constructor() { }

  public nav_point_change = 'translate3d(0px, 0%, 0px)';

  ngOnInit(): void {
  }

  changeNav() {
    this.nav_point_change = 'translate3d(0px, -175%, 0px)';
  }

}
