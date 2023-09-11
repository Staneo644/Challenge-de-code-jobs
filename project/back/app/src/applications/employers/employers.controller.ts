import { Controller, Post, Put, Delete, Param, Body, Get, Res, Options, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployersService } from './employers.service';
import { IsNotEmpty } from 'class-validator';
import { Employer } from 'src/core/employers/employer.entity';
import { Response } from 'express';

interface EmployerData {
  surname: string;
  name: string;
  email: string;
  // Ajoutez d'autres propriétés si nécessaire
}

export class createEmployer {
  @IsNotEmpty({ message: 'email is required' })
  email: string;
  @IsNotEmpty({ message: 'surname is required' })
  surname: string;
  @IsNotEmpty({ message: 'name is required' })
  name: string;
  @IsNotEmpty({ message: 'enterprise_id is required' })
  enterprise_id: number;
}

@Controller('employers')
export class EmployersController {
  constructor(private readonly employersService: EmployersService) {}


  @Get() // Define a GET route for "/employers"
  getAllEmployers() {
    console.log('GET /employers');
    return true;
  }

  @Options()
  handleOptions(@Res() res: Response) {
    console.log('OPTIONS /employers');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.status(200).send(); // Respond with a 200 OK status for the OPTIONS request.
  }


  @Post()
  @UsePipes(ValidationPipe)
  createEmployer(@Body() employerJSON: Employer) {
    console.log('create /employers');
    console.log(employerJSON);
    return this.employersService.createEmployer(employerJSON);
    
  }

  @Put(':employerId')
  updateEmployer(@Param('employerId') employerEmail: string, @Body() employerData: any) {
    return this.employersService.updateEmployer(employerEmail, employerData);
  }

  @Delete(':employerId')
  deleteEmployer(@Param('employerId') employerEmail: string) {
    return this.employersService.deleteEmployer(employerEmail);
  }

  @Get(':employerId')
  getEmployer(@Param('employerId') employerEmail: string) {
    return this.employersService.getEmployer(employerEmail);
  }
}