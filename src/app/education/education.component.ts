import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations = [
    {
      degree: 'Ingénieur de développement informatique',
      institution: 'Société tunisienne des filtres - misfat',
      startYear: 'September 2023',
      endYear: 'October 2023',
      description: 'Mise en place d\'un module chat... (comme dans ton projet)',
    },
    {
      degree: 'Développeur web',
      institution: 'Société tunisienne des filtres - misfat',
      startYear: 'July 2022',
      endYear: 'August 2022',
      description: 'Déploiement de deux applications web... (comme dans ton projet)',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
