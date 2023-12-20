import { Module } from '@nestjs/common';
import { MovieSearchController } from './controllers/movie-search.controller.ts';
import { OmdbService } from './omdb.service';

@Module({
  controllers: [MovieSearchController],
  providers: [OmdbService],
})
export class OmdbModule {}
