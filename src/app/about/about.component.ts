import { Component, OnInit } from '@angular/core';
import { faAngular, faLinux, faAws, faJava, faGit, faDocker } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  letterClass = 'text-animate';
  faAngular = faAngular;
  faLinux = faLinux;
  faAws = faAws;
  faJava = faJava;
  faGit = faGit;
  faDocker = faDocker;

  ngOnInit(): void {
    setTimeout(() => {
      this.letterClass = 'text-animate-hover';
    }, 3000);
  }

}
