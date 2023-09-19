import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { JobsDomain } from './jobs.domain';
import { Employer } from 'src/core/employers/employer.entity';
import { EmployersService } from '../employers/employers.service';
import { EmployersModule } from '../employers/employers.module';
import { EmployersDomain } from '../employers/employers.domain';
import { EnterprisesModule } from '../enterprises/enterprises.module';
import { EnterprisesDomain } from '../enterprises/enterprises.domain';
import { EnterprisesService } from '../enterprises/enterprises.service';
import { JobSeekersModule } from '../job-seekers/job-seekers.module';
import { MongooseModule } from '@nestjs/mongoose';
import {MulterModule} from '@nestjs/platform-express/multer';

@Module({
  imports: [

  MulterModule.register({
    dest: './public/images', // Où les images seront stockées temporairement
  }),
],
  providers: [JobsService, JobsDomain],
  controllers: [JobsController]
})
export class JobsModule {}
