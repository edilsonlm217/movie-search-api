import { Module } from '@nestjs/common';
import { OmdbModule } from './modules/omdb/omdb.module';

@Module({
  imports: [OmdbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
