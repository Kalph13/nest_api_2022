import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  describe('getAllMovies()', () => {
    it('Should Return an Array', () => {
      const result = service.getAllMovies();
      /* Test Whether getAllMovie() Returns Array or Not */
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getMovie()', () => {
    it('Should Return a Movie Object', () => {
      service.createMovie({
        title: 'Test',
        genres: ['Genre 1', 'Genre 2', 'Genre 3'],
        year: 2000,
      });
      const movie = service.getMovie(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it('Should Throw 404 Error', () => {
      try {
        service.getMovie(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('removeMovie()', () => {
    it('Remove a Movie', () => {
      service.createMovie({
        title: 'Test',
        genres: ['Genre 1', 'Genre 2', 'Genre 3'],
        year: 2000,
      });
      const beforeRemove = service.getAllMovies().length;
      service.removeMovie(1);
      const afterRemove = service.getAllMovies().length;
      expect(afterRemove).toBeLessThan(beforeRemove);
    });
    it('Should Return a 404', () => {
      try {
        service.removeMovie(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('createMovie()', () => {
    it('Should Create a Movie', () => {
      const beforeCreate = service.getAllMovies().length;
      service.createMovie({
        title: 'Test',
        genres: ['Genre 1', 'Genre 2', 'Genre 3'],
        year: 2000,
      });
      const afterCreate = service.getAllMovies().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('updateMovie()', () => {
    it('Should Update a Movie', () => {
      service.createMovie({
        title: 'Test',
        genres: ['Genre 1', 'Genre 2', 'Genre 3'],
        year: 2000,
      });
      service.updateMovie(1, {
        title: 'Title Updated',
      });
      const updatedMovie = service.getMovie(1);
      expect(updatedMovie.title).toEqual('Title Updated');
    });
    it('Should Return a 404', () => {
      try {
        service.updateMovie(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
