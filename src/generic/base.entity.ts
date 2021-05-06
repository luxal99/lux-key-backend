import {  PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
export class Base {

  @ApiProperty()
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;


}
