import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.querySelector('.container') as HTMLElement;
    const signUpForm = document.querySelector('.sign-up-container form') as HTMLElement;
    const emailContainer = document.querySelector('.email-container') as HTMLElement;
    const signUpBtn = document.querySelector('.sign-up-btn') as HTMLElement;

    signUpButton?.addEventListener('click', () => {
      container.classList.add('right-panel-active');
      emailContainer.style.display = 'block';
      signUpBtn.innerHTML = 'Create Account';
    });

    signInButton?.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
      emailContainer.style.display = 'none';
      signUpBtn.innerHTML = 'Sign in';
    });
  }

}
