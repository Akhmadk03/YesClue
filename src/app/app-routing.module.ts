import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './main/auth/log-in/sign-in.component';

const routes: Routes = [
  { path: '', component: LoginSignupComponent }  // Define route for the LoginSignupComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
