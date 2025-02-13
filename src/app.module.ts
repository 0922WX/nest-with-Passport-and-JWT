/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {ConfigModule} from '@nestjs/config';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
@Module({
  imports: [
    AuthModule, 
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService,JwtAuthGuard],
})
export class AppModule {}
