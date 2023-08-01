const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const trainerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  first_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  last_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  age: {
    type: Number,
    required: true,
    minlength: 2,
  },
  sex: {
    type: String,
    required: true,
    minlength: 1,
  },
  country: {
    type: String,
    required: true,
    minlength: 4,
  },
  trainer: {
    type: Boolean,
    required: true,
    minlength: 1,
  },
});

  trainerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 16;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  trainerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const Trainer = model('Trainer', trainerSchema);
  
  module.exports = Trainer;