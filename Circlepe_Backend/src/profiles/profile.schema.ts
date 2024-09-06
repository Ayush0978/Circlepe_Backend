import { Schema } from 'mongoose';

export const ProfileSchema = new Schema({
  userId: String,
  bio: String,
  avatar: String,
});
