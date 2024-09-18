import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      id: '01',
      title: 'Software Development Engineer (Intern)',
      company: 'Advanced Derivative Solutions',
      date: 'February 2024 - July 2024',
      description: 'Developed a chat module to ensure real-time communication between Private Equity firms and investors, along with an onboarding solution for investors.',
      tools: ['MySQL', 'Spring Boot', 'Angular']
    },
    {
      id: '02',
      title: 'Devops Engineer (Intern)',
      company: 'Tunisian Filter Company - Misfat',
      date: 'September 2023 - October 2023',
      description: 'Deployed two web applications: Managed CI/CD pipeline, automated builds, tests, and deployment of the QRQC application on a Docker container network. Upgraded the application to version 7.4 of Alfresco using containerization.',
      tools: ['Docker', 'Jenkins', 'Hyper-V']
    },
    {
      id: '03',
      title: 'Web Developer (Intern)',
      company: 'Tunisian Filter Company - Misfat',
      date: 'July 2022 - August 2022',
      description: 'Created a QRQC web application to manage incidents, schedule meetings, and store corrective actions. Implemented Data Warehouse to help decision-makers.',
      tools: ['Spring Boot', 'Angular', 'SQL Server']
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
