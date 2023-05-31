interface Routes {
  [ key: string ]: string[]
}

interface Types {
  [ key: string ]: string
}

interface Search {
  types: Types
}

export interface Constants {
  routes: Routes
  search: Search
}