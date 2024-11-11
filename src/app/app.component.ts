import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {CardModule} from 'primeng/card';
import {ProjectsComponent} from './projects/projects.component';
import {EducationComponent} from './education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, CardModule, ProjectsComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iomega11.github.io';
}
