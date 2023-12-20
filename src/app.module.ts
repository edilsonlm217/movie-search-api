import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OmdbModule } from './modules/omdb/omdb.module';

@Module({
  imports: [OmdbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
