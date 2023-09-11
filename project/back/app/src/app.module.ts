import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './shared/database/database.module';
import { NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CorsMiddleware } from './cors.middleware'; // Créez un middleware CORS personnalisé
import { EmployersModule } from './applications/employers/employers.module';
import { JobsModule } from './applications/jobs/jobs.module';
import { EnterprisesModule } from './applications/enterprises/enterprises.module';
@Module({
  imports: [DatabaseModule, EmployersModule, JobsModule, EnterprisesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}