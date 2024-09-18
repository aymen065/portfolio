import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  display = true;
  constructor() { }

  ngOnInit(): void {
  }
  hamburg(): void {
    let navbar = document.querySelector<HTMLElement>(".dropdown");
    if (navbar) {
      navbar.style.transform = "translateY(0px)";
    }
  }

  cancel(): void {
    const navbar = document.querySelector<HTMLElement>(".dropdown");
    if (navbar) {
      navbar.style.transform = "translateY(-500px)";
    }
  }

}
