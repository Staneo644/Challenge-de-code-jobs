import { Controller, Res } from '@nestjs/common';
import { Post, Put, Param, Body, Get, Delete } from '@nestjs/common';
import { JobsDomain } from './jobs.domain';
import { Job } from './job.entity';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsDomain) {}

    @Get()
    getJobs() {
      console.log('GET request received for all jobs')
      return this.jobsService.getJobs();
    }

    @Get(':jobId')
    async getJobById( @Param('jobId') jobId: string, @Res() res) {
      console.log('GET request received for job ', jobId)
      return await this.jobsService.getJobById(Number(jobId))
    }

    @Delete(':jobId')
    deleteJob(@Param('jobId') jobId: string) {
    console.log('DELETE request received for job ', jobId)
    return this.jobsService.deleteJob(Number(jobId));
  }

    @Post(':email')
    createJob( @Param ('email') email:string, @Body() jobData: Job) {
      console.log('POST request received for job ', jobData);
      return this.jobsService.createJob(jobData, email);
    }
  
    @Put(':jobId')
    updateJob( @Param('jobId') jobId: string, @Body() jobData: Job) {
      console.log('PUT request received for job ', jobId)
      return this.jobsService.updateJob(Number(jobId), jobData);
    }
}
