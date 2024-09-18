import { Component, OnInit } from '@angular/core';
import { PhoneComponent } from '../phone/phone.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  texts: string[] = ["SOFTWARE ENGINEER", "DEVELOPER"];
  speed: number = 100;
  textIndex: number = 0;
  charcterIndex: number = 0;
  textElements: HTMLElement | null = null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.textElements = document.querySelector(".typewriter-text");
    this.typeWriter();
  }



  typeWriter(): void {
    if (this.textElements && this.charcterIndex < this.texts[this.textIndex].length) {
      this.textElements.innerHTML += this.texts[this.textIndex].charAt(this.charcterIndex);
      this.charcterIndex++;
      setTimeout(() => this.typeWriter(), this.speed);
    } else {
      setTimeout(() => this.eraseText(), 1000);
    }
  }

  eraseText(): void {
    if (this.textElements && this.textElements.innerHTML.length > 0) {
      this.textElements.innerHTML = this.textElements.innerHTML.slice(0, -1);
      setTimeout(() => this.eraseText(), 50);
    } else {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.charcterIndex = 0;
      setTimeout(() => this.typeWriter(), 500);
    }
  }
  openDialog(): void {
    document.body.classList.add('modal-open'); 
    this.dialog.open(PhoneComponent, {
    }).afterClosed().subscribe(() => {
      document.body.classList.remove('modal-open');
    });
  }
}
