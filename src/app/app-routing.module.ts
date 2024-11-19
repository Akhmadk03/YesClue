// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './main/auth/log-in/sign-in.component';
import { HomepageComponent } from './main/home/homepage/homepage.component';

const routes: Routes = [
  { path: 'login', component: LoginSignupComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' } // Redirect any unknown paths to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}