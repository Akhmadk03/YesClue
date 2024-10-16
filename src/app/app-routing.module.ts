import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './main/auth/log-in/sign-in.component';
import { HomepageComponent } from './main/home/homepage/homepage.component'; 

  const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login on app load
    { path: 'homepage', component: HomepageComponent },
    { path: 'login', component: LoginSignupComponent },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
