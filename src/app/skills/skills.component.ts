import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  images = [
    {
      url: "assets/img/work/skills/spring.png",
      name: 'Spring Boot',
     },
     {
      url: "assets/img/work/skills/angular.png",
      name: 'Angular',
     },
     {
      url: "assets/img/work/skills/hibernate.png",
      name: 'Hibernate',
     },
     {
      url: "assets/img/work/skills/mysql.png",
      name: 'MySQL',
     },
     {
      url: "assets/img/work/skills/terraform.png",
      name: 'Terraform',
     },
     {
      url: "assets/img/work/skills/docker.png",
      name: 'Docker',
     },
     {
      url: "assets/img/work/skills/maven.png",
      name: 'Maven',
     },
     {
      url: "assets/img/work/skills/jenkins.png",
      name: 'Jenkins',
     },
     {
      url: "assets/img/work/skills/gitlab.png",
      name: 'GitLab',
     },
     {
      url: "assets/img/work/skills/github.png",
      name: 'GitHub',
     },
  ];


  ngOnInit(): void {
   
  }


}
