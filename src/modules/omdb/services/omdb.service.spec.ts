import { Test, TestingModule } from '@nestjs/testing';
import { HttpService, HttpModule } from '@nestjs/axios';
import { OmdbService } from './omdb.service';
import { of, throwError, firstValueFrom } from 'rxjs'; // Importe firstValueFrom
import { AxiosResponse } from 'axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Movie } from '../types';
import { createMockMovie } from '../mocks/movie.mock';

describe('OmdbService', () => {
  let service: OmdbService;
  let httpService: HttpService;

  beforeEach(async () => {
    jest.resetModules(); // Reseta os módulos antes de cada teste

    process.env.OMDB_API_URL = 'https://api.test.com';
    process.env.OMDB_API_KEY = 'test-api-key';

    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [OmdbService],
    }).compile();

    service = module.get<OmdbService>(OmdbService);
    httpService = module.get<HttpService>(HttpService);
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restaura todos os mocks após cada teste
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('searchMovies', () => {
    const mockMovie = createMockMovie();

    it('should return movie data on successful request', async () => {
      const title = 'The Matrix';
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          data: mockMovie,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
        } as AxiosResponse<Movie>),
      );

      const result = await firstValueFrom(service.searchMovies(title)); // Use firstValueFrom
      expect(result.data).toEqual(mockMovie);
    });

    it('should throw HttpException on unsuccessful request', async () => {
      const title = 'Invalid Movie Title';
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          data: { Response: 'False' },
          status: 500,
          statusText: 'Internal Server Error',
          headers: {},
          config: {},
        } as AxiosResponse<{ Response: string }>),
      );

      // Ensure that the service throws the expected exception
      await expect(firstValueFrom(service.searchMovies(title))).rejects.toThrow(
        new HttpException(
          'Algo deu errado ao buscar os dados do filme. Verifique o título e tente novamente.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });

    it('should throw HttpException on error', async () => {
      const title = 'The Matrix';
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        throwError(
          () =>
            // Use uma função de fábrica
            new HttpException(
              'Algo deu errado ao buscar os dados do filme. Verifique o título e tente novamente.',
              HttpStatus.INTERNAL_SERVER_ERROR,
            ),
        ),
      );

      // Ensure that the service throws the expected exception
      await expect(firstValueFrom(service.searchMovies(title))).rejects.toThrow(
        new HttpException(
          'Algo deu errado ao buscar os dados do filme. Verifique o título e tente novamente.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });
});
