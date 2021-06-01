import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  translate = 'translate3d(0px, 0%, 0px)';
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) => {
      if (event.deltaY < 0) {
        console.log('scrolling up');



      } else if (event.deltaY > 0) {
        console.log('scrolling down');
        scroll();


      }

    });
  }
  scroll() {
    this.translate = 'translate3d(0px, 50%, 0px)';
  }

}
