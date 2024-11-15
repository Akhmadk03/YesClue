import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage', // Defines the selector for the component
  templateUrl: './homepage.component.html', // Points to the HTML template for this component
  styleUrls: ['./homepage.component.css'] // Points to the CSS styles for this component
})
export class HomepageComponent {
  // Array to store all projects with details such as name, date, description, comments, files, and images
  projects: { 
    name: string; 
    date: string; 
    description: string; 
    comments: string[]; 
    files: { name: string; url: string }[]; 
    images: { name: string; url: string }[] 
  }[] = [];

  // Stores the currently selected project for detailed view
  selectedProject: { 
    name: string; 
    date: string; 
    description: string; 
    comments: string[]; 
    files: { name: string; url: string }[]; 
    images: { name: string; url: string }[] 
  } | null = null;

  // Variables for new project creation
  newProjectName = ''; // Name of the new project
  newProjectDate = ''; // Date of the new project
  newProjectDescription = ''; // Description of the new project

  // Variables for adding comments
  newComment = ''; // Holds the comment text entered by the user

  // Controls whether the "Add Project" modal is visible
  isModalOpen = false;

  // Temporary arrays to store uploaded files and images for the new project
  selectedFiles: { name: string; url: string }[] = []; // Stores file names and URLs
  selectedImages: { name: string; url: string }[] = []; // Stores image names and URLs

  // Stores the current search term entered in the search bar
  searchTerm = '';

  // Opens the "Add Project" modal by setting the modal visibility flag
  openAddProjectModal() {
    this.isModalOpen = true;
  }

  // Closes the "Add Project" modal when the user clicks outside the modal content
  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isModalOpen = false;
    }
  }

  // Handles file uploads by generating object URLs for selected files
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement; // Cast the event target to an input element
    if (input.files) {
      this.selectedFiles = Array.from(input.files).map(file => ({
        name: file.name, // File name
        url: URL.createObjectURL(file) // Blob URL for the file
      }));
    }
  }

  // Handles image uploads by generating object URLs for selected images
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement; // Cast the event target to an input element
    if (input.files) {
      this.selectedImages = Array.from(input.files).map(file => ({
        name: file.name, // Image name
        url: URL.createObjectURL(file) // Blob URL for the image
      }));
    }
  }

  // Saves the new project to the projects array
  saveProject() {
    // Ensure that all required fields are filled
    if (this.newProjectName && this.newProjectDate && this.newProjectDescription) {
      const newProject = {
        name: this.newProjectName, // Name of the new project
        date: this.newProjectDate, // Date of the new project
        description: this.newProjectDescription, // Description of the new project
        comments: [], // Initialize an empty comments array
        files: this.selectedFiles, // Attach uploaded files
        images: this.selectedImages // Attach uploaded images
      };

      this.projects.push(newProject); // Add the new project to the list
      this.clearInputFields(); // Reset the form inputs
      this.isModalOpen = false; // Close the modal
    } else {
      alert('Please fill in all fields.'); // Notify the user if fields are missing
    }
  }

  // Clears all input fields and resets temporary arrays for files and images
  clearInputFields() {
    this.newProjectName = ''; // Reset project name
    this.newProjectDate = ''; // Reset project date
    this.newProjectDescription = ''; // Reset project description
    this.selectedFiles = []; // Clear file selections
    this.selectedImages = []; // Clear image selections
  }

  // Selects a project for detailed view when clicked
  selectProject(project: { 
    name: string; 
    date: string; 
    description: string; 
    comments: string[]; 
    files: { name: string; url: string }[]; 
    images: { name: string; url: string }[] 
  }) {
    this.selectedProject = project; // Set the selected project
  }

  // Deselects the currently selected project and returns to the project list
  deselectProject() {
    this.selectedProject = null;
  }

  // Adds a new comment to the currently selected project
  addComment() {
    if (this.selectedProject && this.newComment.trim()) {
      this.selectedProject.comments.push(this.newComment); // Add the comment to the project's comment array
      this.newComment = ''; // Clear the input field
    } else {
      alert('Please enter a comment'); // Notify the user if the comment is empty
    }
  }
}
