import { Body, Controller, Post, Headers } from '@nestjs/common';
import { SignupDTO } from './dto/signup.dto';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') // localhost:3000/auth/register
  async register(@Body() signUpDTO: SignupDTO) {
    const userID = await this.authService.registerUser(signUpDTO);

    return userID;
  }

  @Post('login') // localhost:3000/auth/login
  async login(@Body() loginDTO: LoginDTO) {
    const tokens = await this.authService.signIn(loginDTO);

    return tokens;
  }

  @Post('logout')
  logoutUser(@Headers('refresh-token') refreshToken: string) {
    console.log(refreshToken);
    return this.authService.logoutUser(refreshToken);
  }

  @Post('refresh-token')
  async refreshAccessToken(@Headers('refresh-token') refreshToken: string) {
    const tokens = await this.authService.refreshAccessToken(refreshToken);

    return tokens;
  }
}
