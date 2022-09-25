import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { PreviewComponent } from './preview/preview.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ContactService} from './contact/contact.service';
import { GoogleRecaptchaComponent } from './google-recaptcha/google-recaptcha.component';
import {RecaptchaModule} from 'angular-google-recaptcha';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ProjectComponent,
    ResumeComponent,
    ContactComponent,
    PreviewComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    GoogleRecaptchaComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot({
      siteKey: '6LfdLcIZAAAAALPgvY4p5AAlLUrFiHhon8I16Csf',
    }),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
