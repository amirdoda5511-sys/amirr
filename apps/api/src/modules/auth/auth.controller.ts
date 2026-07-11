import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: any) {
    // TODO: Implement login with validation
    return { message: 'Login endpoint - under development' };
  }

  @Post('signup')
  async signup(@Body() dto: any) {
    // TODO: Implement signup with validation
    return { message: 'Signup endpoint - under development' };
  }

  @Post('refresh')
  async refresh(@Body() dto: any) {
    // TODO: Implement token refresh
    return { message: 'Refresh endpoint - under development' };
  }
}
