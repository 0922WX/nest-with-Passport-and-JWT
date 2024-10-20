/* eslint-disable prettier/prettier */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService:ConfigService) {
    super({
      //从header中的authorization字段的Bearer中获取token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //不忽视token过期情况,过期返回401
      ignoreExpiration: false,
      //读取配置中的secret
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload:any){
    return {id:payload.sub,username:payload.userName}
  }
}
