import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignupDTO } from './dto/signup.dto';
import { hash, compare } from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async registerUser(userData: SignupDTO): Promise<number> {
    const foundUser = await this.usersService.findOneByEmail(userData.email);

    if (foundUser) {
      throw new BadRequestException(
        `User with email: ${userData.email} already exists`,
      );
    }

    const hashedPassword = await hash(userData.password, 8);

    const userID = await this.usersService.createUser(
      userData.email,
      hashedPassword,
    );

    return userID;
  }

  async signIn(userData: LoginDTO) {
    const foundUser = await this.usersService.findOneByEmail(userData.email);

    if (!foundUser) {
      throw new NotFoundException(
        `User with email: ${userData.email} does not exists`,
      );
    }

    const isPasswordValid = await compare(
      userData.password,
      foundUser.password, // the hashed password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Generate jwt token
    const jwtPayload = { sub: foundUser.id, email: foundUser.email };

    const token = await this.jwtService.signAsync(jwtPayload);

    // GENERATE NEW REFRESH TOKEN
    const refreshToken = await this.jwtService.signAsync(
      { sub: foundUser.id },
      {
        secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
        expiresIn: '7d',
      },
    );
    // SAVE REFRESH TOKE IN DB
    await this.usersService.saveRefreshToken(foundUser.id, refreshToken);
    return {
      token,
      refreshToken,
    };
  }

  async logoutUser(refreshToken: string) {
    try {
      const verified = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
      });
      console.log(verified);
      await this.usersService.deleteRefreshToken(verified.sub);
    } catch (error) {
      throw new BadRequestException("Can't logout user");
    }
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      //1. Verify refresh token
      const verified = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
      });
      //2. Find user in db
      const foundUser = await this.usersService.findOneByID(verified.sub);

      //3. Check if token exists in db
      const isSameRefreshToken = foundUser.refreshToken === refreshToken;

      if (!isSameRefreshToken) throw new Error('Refresh token is not same');

      //4. Generate new tokens
      const newAccessToken = await this.jwtService.signAsync({
        sub: foundUser.id,
      });

      console.log('1');
      const newRefreshToken = await this.jwtService.signAsync(
        { sub: foundUser.id },
        {
          secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
          expiresIn: '7d',
        },
      );

      console.log('2');
      //5. Delete old refresh token and save new refresh token in db
      await this.usersService.deleteRefreshToken(foundUser.id);
      await this.usersService.saveRefreshToken(foundUser.id, newRefreshToken);

      return {
        token: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException();
    }
  }
}
