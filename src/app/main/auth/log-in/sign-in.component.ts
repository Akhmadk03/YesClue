import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class LoginSignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  institution: string = '';
  fieldOfStudy: string = '';
  isSignIn: boolean = false; // Toggles between Sign In and Sign Up forms

  constructor(private http: HttpClient, private router: Router) {}

  toggleForm() {
    this.isSignIn = !this.isSignIn;
  }

  createAccount() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      institution: this.institution,
      fieldOfStudy: this.fieldOfStudy,
    };

    this.http.post('http://165.227.83.112:5003/api/auth/signup', userData).subscribe(
      (response: any) => {
        alert('Account created successfully!');
        console.log(response);
      },
      (error) => {
        alert(error.error.message || 'An error occurred during sign-up.');
      }
    );
  }

  signIn() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('http://165.227.83.112:5003/api/auth/login', userData).subscribe(
      (response: any) => {
        alert('Sign in successful!');
        console.log('User details:', response.user);
        this.router.navigate(['/homepage']); // Redirect to homepage
      },
      (error) => {
        alert(error.error.message || 'An error occurred during sign-in.');
      }
    );
  }
}
