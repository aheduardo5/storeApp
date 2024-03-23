//Un schema es una estructura de datos almacenados en una coleccion
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
