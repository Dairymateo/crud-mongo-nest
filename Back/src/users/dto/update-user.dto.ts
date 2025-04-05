/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    @IsOptional()
    @IsString()
    username?: string;
      
    @IsOptional()
    @IsNumber()
    age?: number;

    @IsOptional()
    @IsString()
    email?: string;


    @IsOptional()
    @IsString()
    password?: string;
}
