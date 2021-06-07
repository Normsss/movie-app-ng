import { Component } from '@angular/core';
import { MovieDetails } from '../movie-details/MovieDetails';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  public movies: MovieDetails[] = [];
  public keyWord: string = '';
  public selectedMovies: MovieDetails[] = [];
  public selectedIndex: number;
  public isMovieShown: boolean = false;

  constructor(private movieService: MovieService) {}

  public searchMovies() {
    this.movieService.searchMoviesData(this.keyWord).then((result) => {
      //console.table(result);
      //console.log(result);
      this.movies = result;
      this.keyWord = '';
    });
  }
  public selectedMovie(movie: MovieDetails) {
    if (movie.isSelected) {
      movie.isSelected = false;
      const selectedIndex = this.selectedMovies.indexOf(movie);
      this.selectedMovies.splice(selectedIndex, 1);
    } else {
      movie.isSelected = true;
      this.selectedMovies.push(movie);
    }
    console.table(this.selectedMovies);
  }

  public showSelectedMovies() {
    this.isMovieShown = !this.isMovieShown;
  }
}
