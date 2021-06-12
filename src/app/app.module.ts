import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MainComponent } from './main/main.component';
import { OuterFrameComponent } from './outer-frame/outer-frame.component';
import { SectionsComponent } from './sections/sections.component';
import { ScrollhintComponent } from './scrollhint/scrollhint.component';
import { HNavComponent } from './h-nav/h-nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PersonComponent } from './person/person.component';
import { CursorComponent } from './cursor/cursor.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';







@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    DataProtectionComponent,
    MainComponent,
    OuterFrameComponent,
    SectionsComponent,
    ScrollhintComponent,
    HNavComponent,
    ProjectsComponent,
    ContactComponent,
    PersonComponent,
    CursorComponent,
    ScrollBarComponent,
    SkillsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
