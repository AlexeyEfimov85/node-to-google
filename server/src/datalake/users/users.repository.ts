import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryService } from '../base-repository/base-repository.service';
import { User } from './schemas/users.schema';

@Injectable()
export class UsersRepository extends BaseRepositoryService<User> {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<User>,
  ) {
    super(UserModel);
  }
}