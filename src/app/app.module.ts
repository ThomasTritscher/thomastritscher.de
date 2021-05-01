import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MainComponent } from './main/main.component';
import { OuterFrameComponent } from './outer-frame/outer-frame.component';
import { MenuComponent } from './menu/menu.component';
import { SectionsComponent } from './sections/sections.component';
import { ScrollhintComponent } from './scrollhint/scrollhint.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { HNavComponent } from './h-nav/h-nav.component';




@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    DataProtectionComponent,
    MainComponent,
    OuterFrameComponent,
    MenuComponent,
    SectionsComponent,
    ScrollhintComponent,
    ProjectGridComponent,
    HNavComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
