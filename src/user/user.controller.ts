import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  getUsers(@Res() res): any {
    const data = this._userService.getUsers();
    res.status(200).send({ data });
  }
}
