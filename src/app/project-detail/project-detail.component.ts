import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  currentImageIndex: number = 0;

  ngOnInit(): void {

    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.data.project.images.length;
    }, 5000);
  
  }
  isActiveImage( imageIndex: number): boolean {
    return this.currentImageIndex === imageIndex;
  }

}
