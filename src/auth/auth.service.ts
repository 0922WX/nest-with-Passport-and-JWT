/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private  userService:UserService,
        private jwtService:JwtService
    ){}
    
    async validateUser(userName:string,password:string):Promise<any>{
        const user = await this.userService.findOneByUserName(userName);
        if(user && user.password === password){
            const {password,...result} = user;
            return result;
        }
        return null;
    }

    async login(user:User){
        const payload = {username:user.userName,sub:user.id}
        return {
            access_token:this.jwtService.sign(payload)
        }
    }
}
