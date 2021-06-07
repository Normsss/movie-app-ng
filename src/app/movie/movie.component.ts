import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from '../movie-details/MovieDetails';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public imageUrl = 'https://image.tmdb.org/t/p/w185/';
  public noMoviePoster =
    "https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png";
    
  @Input() movie: MovieDetails;

  constructor() { }

  ngOnInit() {
  }

}