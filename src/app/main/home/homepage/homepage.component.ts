import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  projects = []; // Stores all projects
  selectedProject: any = null; // The currently selected project
  newProjectName = '';
  newProjectDate = '';
  newProjectDescription = '';
  isModalOpen = false;
  selectedFiles: File[] = [];
  selectedImages: File[] = [];
  searchTerm = '';
  newComment: string = ''; // Stores new comments

  private apiUrl = 'http://165.227.83.112:5003/api/projects'; // Backend API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProjects(); // Fetch all projects on component initialization
  }

  loadProjects() {
    this.http.get(this.apiUrl).subscribe(
      (projects: any) => {
        this.projects = projects; // Load all projects into the array
      },
      (error) => {
        console.error('Error fetching projects:', error);
        alert('An error occurred while loading projects.');
      }
    );
  }

  openAddProjectModal() {
    this.isModalOpen = true;
  }

  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isModalOpen = false;
    }
  }

  onFileChange(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  onImageChange(event: any) {
    this.selectedImages = Array.from(event.target.files);
  }

  saveProject() {
    if (!this.newProjectName || !this.newProjectDate || !this.newProjectDescription) {
      alert('Please fill in all required fields.');
      return;
    }

    const currentUser = 'John Doe'; // Replace with actual logged-in user info
    const projectData = {
      name: this.newProjectName,
      date: this.newProjectDate,
      description: this.newProjectDescription,
      createdBy: currentUser, // Add the logged-in user's name
      files: this.selectedFiles.map(file => ({
        name: file.name,
        url: URL.createObjectURL(file),
      })),
      images: this.selectedImages.map(image => ({
        name: image.name,
        url: URL.createObjectURL(image),
      })),
    };

    this.http.post(this.apiUrl, projectData).subscribe(
      (response: any) => {
        alert('Project added successfully!');
        this.projects.push(response.project); // Add the project to the UI
        this.clearInputs();
        this.isModalOpen = false;
      },
      (error) => {
        console.error(error);
        alert('An error occurred while saving the project.');
      }
    );
  }

  clearInputs() {
    this.newProjectName = '';
    this.newProjectDate = '';
    this.newProjectDescription = '';
    this.selectedFiles = [];
    this.selectedImages = [];
  }

  selectProject(project: any) {
    this.selectedProject = project;
  }

  deselectProject() {
    this.selectedProject = null;
  }

  addComment() {
    if (this.selectedProject && this.newComment.trim()) {
      if (!this.selectedProject.comments) {
        this.selectedProject.comments = [];
      }
      this.selectedProject.comments.push(this.newComment);
      this.newComment = ''; // Clear the comment input
    } else {
      alert('Please enter a valid comment.');
    }
  }
}
