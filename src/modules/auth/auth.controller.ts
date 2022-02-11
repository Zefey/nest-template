import { Controller, Post, UseGuards, Req, Get, Body } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import LoginDto from './dto/login.dto';
import { JwtAuthGuard } from '@modules/auth/jwt.guard';
import { JwtPayload } from './auth.interface';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  logout(@Req() req: Request) {
    // token: req.headers.authorization
    return this.authService.logout(req.user as JwtPayload);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getProfile(@Req() req) {
    return req.user;
  }
}
