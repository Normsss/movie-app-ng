import { Component } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { MovieDetails } from './MovieDetails';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  public movie: MovieDetails;
  public imageUrl = 'https://image.tmdb.org/t/p/w185/';
  public movieSinopsis: string = '';

  constructor(private movieService: MovieService, private alert: MatSnackBar) {}

  public getData() {
    this.movieService
      .getMovie()
      .then((movie) => {
        console.log(movie);
        this.movie = movie;
        this.movie.image = this.imageUrl + movie.image;
        this.movieSinopsis = '';
      })
      .catch((error) => {
        this.alert.open(error, 'OK');
      });
  }
}
