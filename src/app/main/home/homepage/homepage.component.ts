import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage', // Component selector used in the template
  templateUrl: './homepage.component.html', // Path to the HTML template
  styleUrls: ['./homepage.component.css'] // Path to the CSS stylesheet
})
export class HomepageComponent {
  // List of projects
  projects: { 
    name: string; 
    date: string; 
    description: string; 
    comments: string[]; 
    files: File[]; 
    images: File[] 
  }[] = [];

  // Currently selected project
  selectedProject: { 
    name: string; 
    date: string; 
    description: string; 
    comments: string[]; 
    files: File[]; 
    images: File[] 
  } | null = null;

  // Variables for adding a new project
  newProjectName = ''; // Name of the new project
  newProjectDate = ''; // Date of the new project
  newProjectDescription = ''; // Description of the new project

  // Variables for handling comments
  newComment = ''; // Holds the new comment text

  // Modal control
  isModalOpen = false; // Tracks if the modal is open

  // Variables for file and image uploads
  selectedFiles: File[] = []; // Holds uploaded files
  selectedImages: File[] = []; // Holds uploaded images

  // Variable for search functionality
  searchTerm = ''; // Holds the search input value

  // Opens the modal for adding a new project
  openAddProjectModal() {
    this.isModalOpen = true; // Set the modal to visible
  }

  // Closes the modal when clicked outside the content area
  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isModalOpen = false; // Set the modal to hidden
    }
  }

  // Handles file uploads for documents
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files); // Convert FileList to an array
    }
  }

  // Handles image uploads for pictures
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedImages = Array.from(input.files); // Convert FileList to an array
    }
  }

  // Saves a new project and adds it to the project list
  saveProject() {
    // Ensure all fields are filled
    if (this.newProjectName && this.newProjectDate && this.newProjectDescription) {
      const newProject = {
        name: this.newProjectName, // Name of the project
        date: this.newProjectDate, // Date of the project
        description: this.newProjectDescription, // Description of the project
        comments: [], // Initialize with an empty comment array
        files: this.selectedFiles, // Attach uploaded files
        images: this.selectedImages // Attach uploaded images
      };

      // Add the new project to the list
      this.projects.push(newProject);

      // Automatically select the newly created project
      this.selectedProject = newProject;

      // Clear input fields and close the modal
      this.clearInputFields();
      this.isModalOpen = false;
    } else {
      alert('Please fill in all fields.'); // Show an alert if fields are missing
    }
  }

  // Clears all form inputs
  clearInputFields() {
    this.newProjectName = ''; // Reset project name
    this.newProjectDate = ''; // Reset project date
    this.newProjectDescription = ''; // Reset project description
    this.selectedFiles = []; // Clear selected files
    this.selectedImages = []; // Clear selected images
  }

  // Displays the details of a clicked project
  selectProject(project: { 
    name: string; 
    date: string; 
    description: string; 
    comments: string[]; 
    files: File[]; 
    images: File[] 
  }) {
    this.selectedProject = project; // Set the clicked project as selected
  }

  // Adds a new comment to the selected project
  addComment() {
    if (this.selectedProject && this.newComment.trim()) {
      this.selectedProject.comments.push(this.newComment); // Add the comment
      this.newComment = ''; // Clear the input field
    } else {
      alert('Please enter a comment'); // Show an alert if the comment is empty
    }
  }
}
