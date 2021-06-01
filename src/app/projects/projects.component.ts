import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  translate = 'translate3d(0px, 0%, 0px)';
  offSet = 0;
  constructor() { }
  ngOnInit(): void {
    window.addEventListener("wheel", (event: any) => {
      console.log("SCROLLING");
      if (event.deltaY < 0) {
        console.log('scrolling up');
        this.offSet++;
      } else if (event.deltaY > 0) {
        console.log('scrolling down');
        this.offSet--;
      }
      this.scroll();
    });
  }
  scroll() {
    this.translate = `translate3d(0px, ${this.offSet}%, 0px)`;
  }
}
