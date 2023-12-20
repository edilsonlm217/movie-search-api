import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { OmdbService } from '../omdb.service';

@Controller('movie')
export class MovieSearchController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get('search')
  async search(@Query('title') title: string) {
    this.omdbService.searchMovies(title).subscribe({
      next: response => {
        return {
          statusCode: HttpStatus.OK,
          statusMessage: 'Sua mensagem personalizada aqui',
          movie: response.data,
        };
      },
    });
  }
}
