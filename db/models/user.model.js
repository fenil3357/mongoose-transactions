import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'must proide a username'],
    maxlength: [50, 'username cannot be more than 50 characters'],
    unique: [true, 'username already in use'],
  },
  balance: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export const userModel = mongoose.model('User', userSchema);
