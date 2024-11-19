import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Register service globally
})
export class ProjectService {
  private apiUrl = 'http://localhost:5003/api/projects'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Fetch all projects
  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add a new project
  addProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project);
  }
}
