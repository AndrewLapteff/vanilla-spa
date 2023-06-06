import { constants } from "../common/constants"

export class Header extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    this.style.cssText = 'background: rgb(248, 247, 247); width: full; display: flex; justify-content: start; align-items: center; gap: 15px;'
    style.textContent = `
    a {color: black; text-decoration: none; font-size: 1.1rem}
    img {padding: 5px 1px 0 20px;}
    `

    shadow.innerHTML = `<a href='/'><img width='60' src='../logo.jpg'><a/>`
    shadow.innerHTML += `${Object.entries(constants.routes).map(el => {
      return `<a href="${el[ 1 ][ 0 ]}">${el[ 0 ]}</a>`
    }).join('')}`
    shadow.appendChild(style)
  }
}

customElements.define('custom-header', Header)