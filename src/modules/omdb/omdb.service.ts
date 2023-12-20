import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Movie } from './types';

@Injectable()
export class OmdbService {
  private readonly omdbApiUrl =
    process.env.OMDB_API_URL || this.throwEnvError('OMDB_API_URL');

  private readonly apiKey =
    process.env.OMDB_API_KEY || this.throwEnvError('OMDB_API_KEY');

  constructor(private readonly httpService: HttpService) {}

  /**
   * Throws an error indicating that the specified environment variable is not defined in the .env file.
   *
   * @param {string} envVariable - The name of the missing environment variable.
   * @throws {Error} An error indicating that the specified environment variable is not defined.
   * @returns {never} This function never returns, as it always throws an error.
   */
  private throwEnvError(envVariable: string): never {
    throw new Error(
      `A variável de ambiente ${envVariable} não está definida no arquivo .env`,
    );
  }

  /**
   * Search for movies based on the provided title.
   *
   * @param {string} title - The title of the movie to search for.
   * @returns {Observable<AxiosResponse<Movie>>} An Observable that emits the AxiosResponse<Movie>.
   * @throws {HttpException} If there is an error obtaining movie information.
   */
  searchMovies(title: string): Observable<AxiosResponse<Movie>> {
    const params = {
      apikey: this.apiKey,
      t: title,
      plot: 'full',
    };

    return this.httpService
      .get(this.omdbApiUrl, { params, timeout: 10000 })
      .pipe(
        map(response => {
          if (response.data && response.data.Response === 'False') {
            throw new HttpException(
              'Algo deu errado ao buscar os dados do filme. Verifique o título e tente novamente.',
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }
          return response;
        }),
      );
  }
}
