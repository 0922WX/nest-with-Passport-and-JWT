/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  userName: string;
  password: string;
};

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, userName: 'john', password: '123456'},
    { id: 2, userName: 'jane', password: 'password' },
    { id: 3, userName: 'bob', password: 'password' },
  ];

  async findOneByUserName(userName: string): Promise<User | undefined> {
    return this.users.find((item) => item.userName === userName);
  }
}
