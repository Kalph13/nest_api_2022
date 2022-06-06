import { Injectable, NotFoundException } from '@nestjs/common';

import { Movie } from './entities/movies.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) throw new NotFoundException(`Movie ID ${id} is Not Found`);
    return movie;
  }

  createMovie(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  removeMovie(id: number) {
    /* Throws NotFoundException() When the MovieID Doesn't Exist */
    this.getMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  updateMovie(id: number, updateData: UpdateMovieDTO) {
    /* Throws NotFoundException() When the MovieID Doesn't Exist */
    const movie = this.getMovie(id);
    this.removeMovie(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
