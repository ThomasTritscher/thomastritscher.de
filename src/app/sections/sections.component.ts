import { Component, OnInit } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {


  constructor(public layer: LayerChangeService) { }

  ngOnInit(): void {
    
  }
  elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  animate(event: any, element: HTMLElement) {
    console.log(event, element.innerHTML);
    element.style.background = 'red';
  }
  

}
