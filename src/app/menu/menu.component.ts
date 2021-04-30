import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

constructor() { }

defaultColor = '#585858';
accentColor =  '#FF5722';

ngOnInit(): void {
}
overlayMenu() {
  document.getElementById('m-m-overlay')?.classList.add('active');
  this.changeMenuButton();
}
changeMenuButton(){
  this.defaultColor = '#FF5722';
}
}
