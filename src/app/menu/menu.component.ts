import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  rotate_default = 'rotate(-45deg)';

  constructor() { }

  ngOnInit(): void {
  }
  overlayMenu() {
    document.getElementById('m-m-overlay')?.classList.add ('active');
    this.rotate_default = 'rotate(-85deg)';
  }

}
