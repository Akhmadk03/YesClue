import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Required for HttpClient
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import for fetch support

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './main/auth/log-in/sign-in.component';
import { HomepageComponent } from './main/home/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Import HttpClientModule here
  ],
  providers: [provideHttpClient(withFetch())], // Add fetch support here
  bootstrap: [AppComponent],
})
export class AppModule {}
