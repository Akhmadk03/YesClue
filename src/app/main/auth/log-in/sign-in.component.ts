import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');
    const container = this.el.nativeElement.querySelector('.container');
    const emailContainer = this.el.nativeElement.querySelector('.email-container');
    const signUpBtn = this.el.nativeElement.querySelector('.sign-up-btn');

    this.renderer.listen(signUpButton, 'click', () => {
      this.renderer.addClass(container, 'right-panel-active');
      this.renderer.setStyle(emailContainer, 'display', 'block');
      signUpBtn.innerHTML = 'Create Account';
    });

    this.renderer.listen(signInButton, 'click', () => {
      this.renderer.removeClass(container, 'right-panel-active');
      this.renderer.setStyle(emailContainer, 'display', 'none');
      signUpBtn.innerHTML = 'Sign in';
    });
  }

}
