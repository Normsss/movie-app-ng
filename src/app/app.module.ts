import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { MovieService } from './movie-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchFormComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [MovieService, MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
