const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profileUrl: {
        type: String,
        default: "https://e31c93b4e618ab489354-db4284899b817bc76acff0cd2163cbf8.ssl.cf5.rackcdn.com/system/redactor_assets/pictures/2429/profile-img.png"
    },
    password: {
        type: String,
        required: true
    },
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }]
});

userSchema.pre('save', function(next){
  let user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10).then(function(hashedPassword) {
      user.password = hashedPassword;
      next();
  }, function(err){
    return next(err)
  });
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return next(err);
    next(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;