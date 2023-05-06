const mongoose = require('mongoose')
const Schema = mongoose.Schema
var bcrypt = require('bcrypt');

const Account = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
    password: {
        type: String,
        required: true,
      },
    role: {
        type: Number,
        required: true,
        default: 0
    },
    // isAuthenticated: {
    //     type: Boolean,
    //     required: false,
    //     default: false
    // },
}, {
    collection: 'account'
})

//authenticate input against database
Account.statics.authenticate = function(email, password, callback) {
    UserAccount.findOne({ email: email })
        .exec(function (err, acc) {
            if (!acc && callback) {
            var err = new Error('User not found.')
            err.status = 401;
            return callback(err)
            }
            console.log(acc)
            console.log(acc.email, acc.password)
            // bcrypt.compare(password, acc.password, function (err, result) {
            // if (callback && result === true) {
            //     return callback(null, acc)
            // } else {
            //     return callback()
            // }
            // })
        })
  }
  
  //hashing a password before saving it to the database
    Account.pre('save', function (next) {
        var acc = this;
        bcrypt.hash(acc.password, 10, function (err, hash) {
            if (err) {
                return next(err);
            }
                acc.password = hash;
                next();
            })
    })

const UserAccount = mongoose.model('account', Account)

module.exports = UserAccount



