import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { 
  faAngular, faLinux, faAws, faJava, faGit, faDocker
} from '@fortawesome/free-brands-svg-icons';
import { SkillsComponent } from './skills/skills.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectDetailComponent,
    PortfolioComponent,
    EducationComponent,
    ContactComponent,
    PhoneComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faAngular, faLinux, faAws, faJava, faGit, faDocker);
  }
 }
