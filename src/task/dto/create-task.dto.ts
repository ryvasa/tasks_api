import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The task title',
    required: true,
    example: 'task title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The task description',
    required: false,
    example: 'task description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Whether the task is completed or not',
    default: false,
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}
