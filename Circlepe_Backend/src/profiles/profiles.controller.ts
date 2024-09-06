import { Controller, Post, Body } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post('create')
  create(@Body() createProfileDto: any) {
    return this.profilesService.create(createProfileDto);
  }
}
