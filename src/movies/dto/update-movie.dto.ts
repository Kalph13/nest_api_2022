/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

/* mapped-types: npm install @nestjs/mapped-types */
/* PartialType(): Make All Inputs Optional */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {
  
};

/* Replaced by PartialType() */
/* export class UpdateMovieDTO {
  @IsString()
  readonly title?: string;

  @IsNumber()
  readonly year?: number;
  
  @IsString({ each: true })
  readonly genres?: string[];
} */
