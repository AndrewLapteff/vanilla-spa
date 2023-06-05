import { Article } from "./Article"

export interface Articles {
  status: string,
  totalResults: number,
  articles: Article[]
}