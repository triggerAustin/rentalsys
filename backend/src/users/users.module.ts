import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ 
      secret: 'god', 
      signOptions: { expiresIn: '10h' } 
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  // exports: [UsersService]
})
export class UsersModule {}
