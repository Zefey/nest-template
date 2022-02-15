import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '@enums/role.enum';

export default class UserDto {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsEnum(Role)
  @ApiPropertyOptional({
    enum: Role,
  })
  role: string;

  @IsOptional()
  @ApiPropertyOptional()
  email: string;
}
