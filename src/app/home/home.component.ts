import { Component, OnInit } from '@angular/core';
import { PhoneComponent } from '../phone/phone.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';


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
  seenform: FormGroup;

  constructor(private fb: FormBuilder,public dialog: MatDialog) {
    this.seenform = this.fb.group({
      name: ['portfolio', Validators.required],
      email: ['aymen.chaabani@etudiant-fst.utm.tn', [Validators.required, Validators.email]],
      subject: ['you got one view', Validators.required],
      message: ['your portfolio has been viewed', Validators.required]
    });
  }

  ngOnInit(): void {
    this.textElements = document.querySelector(".typewriter-text");
    this.typeWriter();
    if (!localStorage.getItem('emailSent')) {
      const formData = this.seenform.value;
      emailjs.send('gmail', 'template_exx4pat', formData, 'DpPdpxQ--5M-syP4t');
      localStorage.setItem('emailSent', 'true');

    }
    
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
