import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MovieSearchController } from './controllers/movie-search.controller';
import { OmdbService } from './services/omdb.service';

@Module({
  imports: [HttpModule],
  controllers: [MovieSearchController],
  providers: [OmdbService],
})
export class OmdbModule {}
