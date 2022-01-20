import { UserDto } from '@modules/user/dto/user.dto';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() userDto: UserDto) {
    return this.authService.login(userDto.username, userDto.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  @ApiBearerAuth('token')
  getProfile(@Request() req) {
    return req.user;
  }
}
