import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This ensures the service is a singleton
})
export class AuthService {
  private apiUrl = 'http://localhost:5003/api/auth'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Method to fetch the current logged-in user
  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/current-user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}
