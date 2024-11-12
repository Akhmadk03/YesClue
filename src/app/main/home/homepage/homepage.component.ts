import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  projects: { name: string; date: string; description: string; comments: string[]; files: File[]; images: File[] }[] = [];
  selectedProject: { name: string; date: string; description: string; comments: string[]; files: File[]; images: File[] } | null = null;
  newProjectName = '';
  newProjectDate = '';
  newProjectDescription = '';
  newComment = '';
  isModalOpen = false;
  selectedFiles: File[] = [];
  selectedImages: File[] = [];
  searchTerm = '';

  // Method to open the modal for adding a new project
  openAddProjectModal() {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isModalOpen = false;
    }
  }

  // Handle file upload
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  // Handle image upload
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedImages = Array.from(input.files);
    }
  }

  // Method to save a new project and display it immediately
  saveProject() {
    if (this.newProjectName && this.newProjectDate && this.newProjectDescription) {
      const newProject = {
        name: this.newProjectName,
        date: this.newProjectDate,
        description: this.newProjectDescription,
        comments: [],
        files: this.selectedFiles,
        images: this.selectedImages
      };
      
      // Add the new project to the projects list
      this.projects.push(newProject);
      
      // Immediately set selectedProject to the new project
      this.selectedProject = newProject;

      // Reset form fields and close the modal
      this.clearInputFields();
      this.isModalOpen = false;
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Clear the form fields
  clearInputFields() {
    this.newProjectName = '';
    this.newProjectDate = '';
    this.newProjectDescription = '';
    this.selectedFiles = [];
    this.selectedImages = [];
  }

  // Display selected project details when a project is clicked
  selectProject(project: { name: string; date: string; description: string; comments: string[]; files: File[]; images: File[] }) {
    this.selectedProject = project;
  }

  // Add a comment to the currently selected project
  addComment() {
    if (this.selectedProject && this.newComment.trim()) {
      this.selectedProject.comments.push(this.newComment);
      this.newComment = '';
    } else {
      alert('Please enter a comment');
    }
  }
}
