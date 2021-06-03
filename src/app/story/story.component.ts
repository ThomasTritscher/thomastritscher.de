import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
  } from '@angular/animations';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
    animations: [
    trigger('fadeInOut',[
      transition(':enter', [
        style({ opacity: 1 }),
        animate('2.5s ease-in-out', style({ opacity: 0}))
      ]),
    ]),
  ]
})
export class StoryComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
