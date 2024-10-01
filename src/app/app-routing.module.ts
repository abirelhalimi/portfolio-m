import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProjectComponent} from './project/project.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';
import {PreviewComponent} from './preview/preview.component';

const routes: Routes = [
  {path: 'aboutme', component: AboutComponent},
  {path: '', redirectTo: 'aboutme', pathMatch: 'full'},
  {path: 'projects', component: ProjectComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'preview', component: PreviewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
