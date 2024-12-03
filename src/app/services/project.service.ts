import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Register service globally
})
export class ProjectService {
  private baseUrl = 'http://165.227.83.112:5003/api/projects'; // Backend URL

  constructor(private http: HttpClient) {}

  // Fetch all projects
  getProjects(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Add a new project
  addProject(project: any): Observable<any> {
    return this.http.post(this.baseUrl, project);
  }
}
