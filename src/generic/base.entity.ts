import {  PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
export class Base {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
}
