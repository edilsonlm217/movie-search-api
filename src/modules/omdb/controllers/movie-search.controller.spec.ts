import { Test, TestingModule } from '@nestjs/testing';
import { MovieSearchController } from './movie-search.controller';
import { OmdbService } from '../services/omdb.service';
import { BadRequestException, HttpStatus } from '@nestjs/common';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Movie } from '../types';
import { HttpModule } from '@nestjs/axios';
import { createOmdbServiceMock } from '../mocks/omdb.service.mock';

describe('MovieSearchController', () => {
  let controller: MovieSearchController;
  let omdbService: OmdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieSearchController],
      providers: [
        {
          provide: OmdbService,
          useValue: createOmdbServiceMock(),
        },
      ],
      imports: [HttpModule],
    }).compile();

    controller = module.get<MovieSearchController>(MovieSearchController);
    omdbService = module.get<OmdbService>(OmdbService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('search', () => {
    it('should throw BadRequestException if title is not provided', async () => {
      const title = undefined;

      await expect(controller.search(title)).rejects.toThrow(
        new BadRequestException('O parâmetro "title" é obrigatório.'),
      );
    });

    it('should return movie data when title is provided', async () => {
      const title = 'The Matrix';
      const mockMovie = {
        /* mock movie data */
      };

      jest.spyOn(omdbService, 'searchMovies').mockReturnValueOnce(
        of({
          data: mockMovie,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
        } as AxiosResponse<Movie>),
      );

      const result = await controller.search(title);

      expect(result).toEqual({
        statusCode: HttpStatus.OK,
        statusMessage: 'Filme encontrado com sucesso',
        movie: mockMovie,
      });
    });
  });
});
