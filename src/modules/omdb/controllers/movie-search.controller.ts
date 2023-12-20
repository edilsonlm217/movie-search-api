import {
  BadRequestException,
  Controller,
  Get,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { OmdbService } from '../omdb.service';
import { firstValueFrom } from 'rxjs';

@Controller('movie')
export class MovieSearchController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get('search')
  async search(@Query('title') title: string) {
    if (!title) {
      throw new BadRequestException('O parâmetro "title" é obrigatório.');
    }

    const response = await firstValueFrom(this.omdbService.searchMovies(title));

    return {
      statusCode: HttpStatus.OK,
      statusMessage: 'Filme encontrado com sucesso',
      movie: response.data,
    };
  }
}
