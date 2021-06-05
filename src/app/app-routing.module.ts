import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { PersonComponent } from './person/person.component';
import { ProjectsComponent } from './projects/projects.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  component: MainComponent},
  { path: 'imprint' , component: ImprintComponent },
  { path: 'data-protection' , component: DataProtectionComponent },
  { path: 'projects' , component: ProjectsComponent},
  { path: 'story' , component: StoryComponent},
  { path: 'person' , component: PersonComponent},
  { path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
