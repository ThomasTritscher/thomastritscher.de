import { Component, OnInit } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';

@Component({
  selector: 'app-scrollhint',
  templateUrl: './scrollhint.component.html',
  styleUrls: ['./scrollhint.component.scss']
})
export class ScrollhintComponent implements OnInit {

  darkMode = false;

  constructor(public layer: LayerChangeService) { }

  ngOnInit(): void {
   
  }
}
