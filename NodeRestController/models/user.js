var mongoose = require('mongoose');
bcrypt = require('bcrypt');


var UserSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    lastName: String,
    email: String,
    number_tel: String,
    password: String,
    typeUser: String
});


UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var User = mongoose.model('user', UserSchema);
module.exports = User;
