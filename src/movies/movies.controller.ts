import {
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  @Get('/search')
  searchMovie(@Query('year') searchYear: string) {
    return `Search a Movie After ${searchYear}`;
  }

  @Get(':id')
  getMovie(@Param('id') movieID: number): Movie {
    return this.moviesService.getMovie(movieID);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete(':id')
  removeMovie(@Param('id') movieID: number) {
    return this.moviesService.removeMovie(movieID);
  }

  @Patch(':id')
  patchMovie(@Param('id') movieID: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.updateMovie(movieID, updateData);
  }
}
