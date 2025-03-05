import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { HousesModule } from './houses/houses.module';
import { LandlordsModule } from './landlords/landlords.module';
import { House } from './houses/house.entity';
import { Landlord } from './landlords/landlord.entity';
import { UnitsModule } from './units/units.module';
import { Unit } from './units/unit.entity';
import { TenantsModule } from './tenants/tenants.module';
import { Tenant } from './tenants/tenant.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env (fucking annoying)
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [User, House, Landlord, Unit, Tenant],
      synchronize: true, // not eto self: ⚠️ Remove in production
      logging: true,
    }),
    UsersModule,
    HousesModule,
    LandlordsModule,
    UnitsModule,
    TenantsModule,
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
