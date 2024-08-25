import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { PROJECTS } from '../mock-projects';
import { CommonModule, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgFor, NgIf],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = PROJECTS;
  selectedProject: string = '';

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }
  highlightProject(projectTitle: string) {
    this.selectedProject = projectTitle;
  }
}
