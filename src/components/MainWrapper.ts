import { Article } from "../interfaces/Article"
import { Articles } from "../interfaces/Articles"

export class MainWrapper extends HTMLElement {
  public shadow: ShadowRoot = {} as ShadowRoot
  public shadowStyle: HTMLStyleElement = document.createElement('style')
  public firstArticle: Article = {} as Article
  public sideArticles: Article[] = [] as Article[]
  public mainArticles: Article[] = [] as Article[]
  public articlesDiv: HTMLDivElement = document.createElement('div')

  constructor() {
    super()
    this.articlesDiv.classList.add('articles-wrapper')
    this.shadowStyle.textContent = `
    .articles-wrapper {margin-top: 40px; width: 80%; display: flex;gap: 20px; flex-wrap: wrap; align-items: start; height: 100%;}
    .article { 
      height: fit-content;
      & .article-title {font-size: 1.2rem; font-weight: bold}
      & .article-author {font-size: .6rem}
      & .article-image {border-radius: .5rem; width: 100%}
      & .article-publishedAt {font-size: 0.8rem}
    }
    .side-article {
      gap: 4px;
      width: 100% !important; 
      display: flex;
      height: fit-content;
      & .article-title {font-size: .9rem; font-weight: bold}
      & .article-author {font-size: .6rem}
      & .article-image {border-radius: .5rem; width: 100px; height: 80px}
      & .article-publishedAt {font-size: 0.8rem}
    }
    .side-articles-bar {
      gap: 20px;
      display: flex;
      flex-direction: column;
      width: 36%
    }
    `
    this.style.cssText = 'height: 97%; display: flex; justify-content: center; '
    this.shadow = this.attachShadow({ mode: "open" })
  }

  articlesPartition(articles: Article[]) {
    if (articles.length != 0) {
      this.firstArticle = articles[ 0 ]
      for (let i = 1; i <= 4; i++) {
        this.sideArticles.push(articles[ i ])
      }
      for (let i = 5; i < articles.length; i++) {
        this.mainArticles.push(articles[ i ])
      }
    }
  }
  static get observedAttributes() {
    return [ 'data-theme' ]
  }

  async fetchData(url: string): Promise<Articles> {
    const response = await fetch(url)
    const reader: ReadableStreamDefaultReader<Uint8Array> | undefined = response.body?.getReader()
    const value: ReadableStreamReadResult<Uint8Array> | undefined = await reader?.read()
    const dataString: string = new TextDecoder().decode(value?.value)
    const data: Articles = JSON.parse(dataString)
    return data
  }

  async attributeChangedCallback(name: string, _: string, theme: string) {
    if (name == 'data-theme') {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${theme}&apiKey=8a470d40a6484defbc3f9cb94ecb6f95`

      const data: Articles = await this.fetchData(url)

      this.articlesPartition(data.articles)

      this.articlesDiv.innerHTML += `
      <div class="article" style='width: 62%'>
        <img class='article-image' src=${this.firstArticle.urlToImage} alt='404' ></img>
        <div>
          <div class='article-title'>${this.firstArticle.title}</div>
          <div class='article-author'>${this.firstArticle.author}</div>
          <div class='article-publishedAt'>${new Date(this.firstArticle.publishedAt).toLocaleDateString()}</div>
        </div>
      </div>`

      this.articlesDiv.innerHTML += `
      <div class="side-articles-bar">
        ${this.sideArticles.map((article) => {
        return `
          <div class='side-article' style='width: 30%'>
            <img class='article-image' src=${article.urlToImage} alt='404' ></img>
            <div>
              <div class='article-title'>${article.title}</div>
              <div class='article-author'>${article.author}</div>
              <div class='article-publishedAt'>${new Date(article.publishedAt).toLocaleDateString()}</div>
            </div>
          </div>
        `
      }).join('')}
      </div>`

      this.articlesDiv.innerHTML += `
        ${this.mainArticles.map((article) => {
        return `
          <div class='article' style='width: 30%'>
            <img class='article-image' src=${article.urlToImage} alt='404' ></img>
            <div>
              <div class='article-title'>${article.title}</div>
              <div class='article-author'>${article.author}</div>
              <div class='article-publishedAt'>${new Date(article.publishedAt).toLocaleDateString()}</div>
            </div>
          </div>`
      }).join('')
        }`

      this.shadow.appendChild(this.articlesDiv)
      this.shadow.appendChild(this.shadowStyle) // стилі мають прикріпляться послідніми!
    }
  }

}

customElements.define('main-wrapper', MainWrapper)