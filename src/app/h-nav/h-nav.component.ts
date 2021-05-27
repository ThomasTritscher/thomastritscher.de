import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayerChangeService } from '../services/layer-change.service';
import { TransitionBgService } from '../services/transition-bg.service';

@Component({
  selector: 'app-h-nav',
  templateUrl: './h-nav.component.html',
  styleUrls: ['./h-nav.component.scss']
})
export class HNavComponent implements OnInit {

// Cursor follower
@ViewChild('cursor')
cursor!: ElementRef;
@ViewChild('cursor2')
cursor2!: ElementRef;

ngAfterViewInit(): void {
  document.addEventListener('mousemove', e => {
    this.cursor.nativeElement.style.cssText = this.cursor2.nativeElement.style.cssText =
      'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
  });
}



  constructor(public layer: LayerChangeService, public translate: TransitionBgService) { }


  ngOnInit(): void {
  }

  

}
