import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  projects: { name: string; date: string; description: string }[] = [];
  selectedProject: { name: string; date: string; description: string } | null = null;
  newProjectName = '';
  newProjectDate = '';
  newProjectDescription = '';
  isModalOpen = false;

  openAddProjectModal() {
    console.log("working")
    this.isModalOpen = true;
  }

  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isModalOpen = false;
    }
  }

  saveProject() {
    if (this.newProjectName && this.newProjectDate && this.newProjectDescription) {
      const newProject = {
        name: this.newProjectName,
        date: this.newProjectDate,
        description: this.newProjectDescription,
      };
      this.projects.push(newProject);
      this.closeModal(new MouseEvent(''));
      this.clearInputFields();
    } else {
      alert('Please fill in all fields.');
    }
  }

  displayProjectDetails(project: { name: string; date: string; description: string }) {
    this.selectedProject = project;
  }

  filterProjects() {
    const filter = this.newProjectName.toLowerCase();
    const filteredProjects = this.projects.filter(project =>
      project.name.toLowerCase().includes(filter)
    );
    this.projects = filteredProjects;
  }

  clearInputFields() {
    this.newProjectName = '';
    this.newProjectDate = '';
    this.newProjectDescription = '';
  }
}
