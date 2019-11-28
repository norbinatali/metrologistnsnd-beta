import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { User } from './User'
import { Post } from './Post'
import {device} from "./Mutation/device";
import {Device} from "./Device";
import {letter} from "./Mutation/letter";
import {TR} from "./TR";
import {tr} from "./Mutation/tr";
import {changeUser} from "./Mutation/changeuser";

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...device,
    ...letter,
    ...tr,
    ...changeUser
  },
  Subscription,
  User,
  Post,
  Device,
  TR
}
