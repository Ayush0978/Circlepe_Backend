import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './profile.schema';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel('Profile') private profileModel: Model<Profile>,
  ) {}

  create(profileData: any): Promise<Profile> {
    const newProfile = new this.profileModel(profileData);
    return newProfile.save();
  }
}
