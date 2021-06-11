import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';


@Component({
  selector: 'app-h-nav',
  templateUrl: './h-nav.component.html',
  styleUrls: ['./h-nav.component.scss']
})
export class HNavComponent implements OnInit {


  constructor(public layer: LayerChangeService) { }


  ngOnInit(): void {
  }

  

}
