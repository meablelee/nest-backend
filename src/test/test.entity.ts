import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Test {
  @ApiProperty({ example: 1, description: '自增ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Hello', description: '测试内容' })
  @Column()
  content: string;
}
