import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import {NgForOf, NgStyle} from '@angular/common';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardModule,
    NgStyle,
    NgForOf,
    Button
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  items: any[] = [{
    header: "Project 1"
  },{
    header: "Project 2"
  },{
    header: "Project 3"
  }];
}
