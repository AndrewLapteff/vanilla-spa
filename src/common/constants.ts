import { Constants } from '../interfaces/Constants'

export const constants: Constants = {
  routes: {
    Main: [ '/', "<main-wrapper data-theme=''><main-wrapper/>" ],
    Entertainment: [ '/entertainment', "<main-wrapper data-theme='entertainment'><main-wrapper/>" ],
    Business: [ '/business', "<main-wrapper data-theme='business'><main-wrapper/>" ],
    Technology: [ '/technology', "<main-wrapper data-theme='technology'><main-wrapper/>" ],
    Science: [ '/science', "<main-wrapper data-theme='science'><main-wrapper/>" ],
    Health: [ '/health', "<main-wrapper data-theme='health'><main-wrapper/>" ],
    Sports: [ '/sports', "<main-wrapper data-theme='sports'><main-wrapper/>" ],
  },
  search: {
    types: {
      post: 'post',
      user: 'user'
    }
  }
}