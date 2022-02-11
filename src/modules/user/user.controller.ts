import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import UserDto from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Role } from '@enums/role.enum';
import { Roles } from '@modules/auth/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from '@modules/auth/roles.guard';
import { JwtAuthGuard } from '@modules/auth/jwt.guard';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiBearerAuth()
  create(@Body() userDto: UserDto): Promise<User> {
    return this.userService.create(userDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiBearerAuth()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiBearerAuth()
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiBearerAuth()
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
