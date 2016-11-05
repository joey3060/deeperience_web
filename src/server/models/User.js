import crypto from 'crypto'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import configs from '../../../configs/project/server'
import Roles from '../../common/constants/Roles'
import Language from '../../common/constants/languages'
import paginatePlugin from './plugins/paginate'
import { SiteSchema } from './Site'
import { TripSchema } from './Trip'
import { PostSchema } from './Post'

const hashPassword = (rawPassword = '') => {
  let hashPassword = rawPassword
  let recursiveLevel = 5
  while (recursiveLevel) {
    hashPassword = crypto
      .createHash('md5')
      .update(hashPassword)
      .digest('hex')
    recursiveLevel -= 1
  }
  return hashPassword
}

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    value: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedAt: Date,
  },
  password: {
    type: String,
    // there is no password for a social account
    required: false,
    set: hashPassword,
  },
  role: {
    type: String,
    enum: Object.keys(Roles).map(r => Roles[r]),
    default: Roles.USER,
  },
  avatarURL: {
    type: String,
    default: '/img/default-avatar.png',
  },
  social: {
    profile: {
      facebook: Object,
      linkedin: Object,
    },
  },
  nonce: {
    verifyEmail: Number,
    resetPassword: Number,
  },
  lastLoggedInAt: Date,
  sites: [SiteSchema],
  ownTrip: [TripSchema],
  buyTrip: [TripSchema],
  posts: [PostSchema],
  selfInfo: {
    vocation: String,
    selfIntro: String,
    hobby: String,
    location: {
      country: String,
      province: String,
      city: String,
    },
    language: {
      type: [{
        languageName: String,
        level: String,
      }],
      default: [{
        languageName: Language.language.CHINESE,
        level: Language.level.MEDIUM,
      }],
    },
  },
  verifiedGuide: Boolean,
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
})

UserSchema.plugin(paginatePlugin)

UserSchema.methods.auth = function(password, cb) {
  const isAuthenticated = (this.password === hashPassword(password))
  cb(null, isAuthenticated)
}

UserSchema.methods.toVerifyEmailToken = function(cb) {
  const user = {
    _id: this._id,
    nonce: this.nonce.verifyEmail,
  }
  const token = jwt.sign(user, configs.jwt.verifyEmail.secret, {
    expiresIn: configs.jwt.verifyEmail.expiresIn,
  })
  return token
}

UserSchema.methods.toResetPasswordToken = function(cb) {
  const user = {
    _id: this._id,
    nonce: this.nonce.resetPassword,
  }
  const token = jwt.sign(user, configs.jwt.resetPassword.secret, {
    expiresIn: configs.jwt.resetPassword.expiresIn,
  })
  return token
}

UserSchema.methods.toAuthenticationToken = function(cb) {
  const user = {
    _id: this._id,
    name: this.name,
    email: this.email,
  }
  const token = jwt.sign(user, configs.jwt.authentication.secret, {
    expiresIn: configs.jwt.authentication.expiresIn,
  })
  return token
}

UserSchema.methods.toJSON = function() {
  const obj = this.toObject()
  delete obj.password
  return obj
}

const User = mongoose.model('User', UserSchema)
export default User
