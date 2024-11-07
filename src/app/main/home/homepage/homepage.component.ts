import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  projects: { name: string; date: string; description: string; comments: string[] }[] = [];
  selectedProject: { name: string; date: string; description: string; comments: string[] } | null = null;
  newProjectName = '';
  newProjectDate = '';
  newProjectDescription = '';
  newComment = ''; // New variable to hold the comment text
  isModalOpen = false;

  openAddProjectModal() {
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
        comments: [] // Initialize comments array for new project
      };
      this.projects.push(newProject);
      this.isModalOpen = false;
      this.clearInputFields();
    } else {
      alert('Please fill in all fields.');
    }
  }

  displayProjectDetails(project: { name: string; date: string; description: string; comments: string[] }) {
    this.selectedProject = project;
    const content = document.getElementById('projectDetails');
    if (content) {
      content.style.display = 'block';
    }
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

  // Method to add a comment to the selected project
  addComment() {
    if (this.selectedProject && this.newComment.trim()) {
      this.selectedProject.comments.push(this.newComment);
      this.newComment = ''; // Clear the comment input field after adding
    } else {
      alert('Please enter a comment');
    }
  }
}
