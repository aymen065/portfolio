import { Component, OnInit } from '@angular/core';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  projects = [
    
    {
      id: 0,
      name: 'LocationTN',
      images: ['assets/img/work/loc/1.PNG', 'assets/img/work/loc/2.PNG', 'assets/img/work/loc/3.PNG','assets/img/work/loc/4.PNG','assets/img/work/loc/5.PNG','assets/img/work/loc/6.PNG','assets/img/work/loc/7.PNG','assets/img/work/loc/8.PNG','assets/img/work/loc/9.PNG','assets/img/work/loc/10.PNG'],
      technologies:["Spring Boot 2.7","Thymeleaf","MySQL 5.7"],
      date:"",
      description: "This project involves developing a web application named 'locationTN.' It will be aimed at people looking to rent a car without wasting time, providing all the necessary information to ensure customer satisfaction. On the other hand, this application is also intended for the company's managers to facilitate interaction with customers."
    },{
      id: 1,
      name: 'E-Store',
      images: ['assets/img/work/ecomm/1.png', 'assets/img/work/ecomm/2.png', 'assets/img/work/ecomm/3.png', 'assets/img/work/ecomm/4.png', 'assets/img/work/ecomm/5.png', 'assets/img/work/ecomm/6.png', 'assets/img/work/ecomm/7.png', 'assets/img/work/ecomm/8.png'],
      technologies:["Spring Boot 2.7","Angular 12","MySQL 5.7"],
      date: "De 1 févr. 2022 À 23 févr. 2022",
      description: "This application is intended for clients, administrators, influencers, and advertisers of various brands and shops, to allow them to interact with each other in an automatically organized manner."
    },
    
  ];

  currentImageIndex: { [key: number]: number } = {};

  ngOnInit(): void {
    this.projects.forEach(project => {
      this.currentImageIndex[project.id] = 0;

      setInterval(() => {
        this.currentImageIndex[project.id] =
          (this.currentImageIndex[project.id] + 1) % project.images.length;
      }, 5000);
    });
  }

  isActiveImage(projectId: number, imageIndex: number): boolean {
    return this.currentImageIndex[projectId] === imageIndex;
  }


  openDialog(project: any): void {
    document.body.classList.add('modal-open'); 
    this.dialog.open(ProjectDetailComponent, {
      data: { project }
    }).afterClosed().subscribe(() => {
      document.body.classList.remove('modal-open');
    });
  }

}
