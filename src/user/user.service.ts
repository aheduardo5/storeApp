import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class UserService {
  getUsers(): any {
    const users = fs.readJSONSync('assets/users.json');

    return users;
  }
}
