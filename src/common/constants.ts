import { Constants } from '../interfaces/Constants'
import main from '../pages/main.template'
import users from '../pages/users.template'

export const constants: Constants = {
  routes: {
    index: [ '/', main() ],
    users: [ '/users', users() ]
  },
  search: {
    types: {
      post: 'post',
      user: 'user'
    }
  }
}