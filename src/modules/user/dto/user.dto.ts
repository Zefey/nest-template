import { Allow, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class UserDto {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;
}
