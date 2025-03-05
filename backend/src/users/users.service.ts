import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  async validateUser(username: string, password: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) throw new UnauthorizedException('user not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('incorrect password');

    const payload = { username: user.username, sub: user.id };

    return {
      accessoken: this.jwtService.sign(payload),
    };
  }
  async updatePassword(username: string, newPassword: string) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    await this.userRepository.update(
      { username },
      { password: hashedPassword },
    );
  }
}
