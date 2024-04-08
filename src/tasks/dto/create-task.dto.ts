import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;

  @IsDate()
  date: string;

  @IsBoolean()
  important: boolean;

  @IsNumber()
  timestamp: number;
}
