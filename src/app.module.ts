import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';

/* 
  app: Excute an App
  app.module: A Root Module
  app.controller: Handles Routing (Gets URLs and Excutes Functions)
  app.service: Stores Controllers for the Routers (Defines Functions)
*/

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
