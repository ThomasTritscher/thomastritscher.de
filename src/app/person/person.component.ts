import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {


  defaultTranslate = 'translate3d(0px, 0px, 0px)';

  constructor() { }

  ngOnInit(): void {
    document.getElementById('fin')?.classList.add('show');
  }

}
