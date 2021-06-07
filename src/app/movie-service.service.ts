import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from './movie-details/MovieDetails';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovie(): Promise<MovieDetails> {
    const randomId = Math.floor(Math.random() * 10000);
    const url = `https://api.themoviedb.org/3/movie/${randomId}?api_key=4e370cf87047d952e72f249f236f6e94&language=es`;
    console.log(url);
    return this.http
      .get(url) 
      .toPromise()
      .then((data: any) => {
        console.log(data);
        return {
          title: data.title,
          image: data.poster_path,
          country: data.production_countries[0].name,
          date: data.release_date,
          sinopsis: data.overview,
        };
      })
      
      ;
  }

  searchMoviesData(keyWord: string): Promise<MovieDetails[]> {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?&api_key=4e370cf87047d952e72f249f236f6e94&language=es&query=${keyWord}`;

    console.log(searchUrl);

    //regresa promesa
    return this.http
      .get<ResponseSearch>(searchUrl)
      .toPromise()
      .then((data) => {
        //regresa array
        return data.results.map((movie) => {
          //regresa objeto MovieDetails
          return {
            title: movie.title,
            image: movie.poster_path,
            date: movie.release_date,
            sinopsis: movie.overview,
          };
        });
      });
  }
}

interface ResponseSearch {
  results: any[];
}
