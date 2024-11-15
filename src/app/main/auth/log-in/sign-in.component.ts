import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-signup', // Component selector used in the HTML template
  templateUrl: './sign-in.component.html', // Path to the HTML file
  styleUrls: ['./sign-in.component.css'] // Path to the CSS file
})
export class LoginSignupComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // Inject Renderer2 for safely manipulating the DOM
    // Inject ElementRef for accessing DOM elements
  }

  ngOnInit(): void {
    // Query the DOM elements required for the functionality
    const signUpButton = this.el.nativeElement.querySelector('#signUp'); // Button for switching to sign-up form
    const signInButton = this.el.nativeElement.querySelector('#signIn'); // Button for switching to sign-in form
    const container = this.el.nativeElement.querySelector('.container'); // Main container for toggling states
    const emailContainer = this.el.nativeElement.querySelector('.email-container'); // Email input container
    const signUpBtn = this.el.nativeElement.querySelector('.sign-up-btn'); // Sign-up button text handler

    // Add an event listener to the "Sign Up" button
    this.renderer.listen(signUpButton, 'click', () => {
      // Add the "right-panel-active" class to trigger the sign-up animation
      this.renderer.addClass(container, 'right-panel-active');
      // Show the email input container
      this.renderer.setStyle(emailContainer, 'display', 'block');
      // Update the button text to "Create Account"
      signUpBtn.innerHTML = 'Create Account';
    });

    // Add an event listener to the "Sign In" button
    this.renderer.listen(signInButton, 'click', () => {
      // Remove the "right-panel-active" class to trigger the sign-in animation
      this.renderer.removeClass(container, 'right-panel-active');
      // Hide the email input container
      this.renderer.setStyle(emailContainer, 'display', 'none');
      // Update the button text to "Sign in"
      signUpBtn.innerHTML = 'Sign in';
    });
  }

}
