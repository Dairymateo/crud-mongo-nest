/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;


  @IsNotEmpty()
  @IsString()
  email: string;


  @IsNotEmpty()
  @IsString()
  password: string;




}
