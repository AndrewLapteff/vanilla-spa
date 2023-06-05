import { Constants } from '../interfaces/Constants'

export const constants: Constants = {
  routes: {
    Main: [ '/', "<main-wrapper data-theme='world'><main-wrapper/>" ],
    Ukraine: [ '/ukraine', "<main-wrapper data-theme='ukraine'><main-wrapper/>" ],
    Politics: [ '/politics', "<main-wrapper data-theme='politics'><main-wrapper/>" ],
    Business: [ '/business', "<main-wrapper data-theme='world'><main-wrapper/>" ],
    Bitcoin: [ '/bitcoin', "<main-wrapper data-theme='world'><main-wrapper/>" ],
    Sports: [ '/sports', "<main-wrapper data-theme='world'><main-wrapper/>" ],
    Health: [ '/health', "<main-wrapper data-theme='world'><main-wrapper/>" ]
  },
  search: {
    types: {
      post: 'post',
      user: 'user'
    }
  }
}