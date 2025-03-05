import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.userService.findUsers();
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return await this.userService.validateUser(body.username, body.password);
  }

  @Post('update-password/:username')
  async updateUserPassword(
    @Param('username') username: string,
    @Body('password') password: string,
  ) {
    await this.userService.updatePassword(username, password);
    return { message: 'Password updated successfully' };
  }
}