import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'The task title',
    required: false,
    example: 'task title',
  })
  title?: string;

  @ApiProperty({
    description: 'The task description',
    required: false,
    example: 'task description',
  })
  description?: string;

  @ApiProperty({
    description: 'Whether the task is completed or not',
    default: false,
    example: false,
  })
  isCompleted?: boolean;
}
