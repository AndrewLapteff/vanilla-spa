import { constants } from "../common/constants"

export const render = (path: string) => {
  if (path.endsWith('/') && path.length > 1) path = path.slice(0, -1)
  const error = '<h1>404</h1>'
  let content = ''
  // перевіряємо чи є введене посилання в нашому роутінгу
  for (let route in constants.routes) {
    const isCorrect = constants.routes[ route ][ 0 ] == path
    console.log(isCorrect)
    if (isCorrect) {
      content = constants.routes[ route ][ 1 ]
    }
  }
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${content != '' ? content : error}
  `
}

// метод котрий запам'ятовує історію переходів користувача
export const goTo = (path: string) => {
  window.history.pushState({ path }, path, path)
  render(path)
}

const initRouter = () => {
  // обродник подій на випадки напитиснення кнопок в браузері вперед на та назад
  window.addEventListener('popstate', () => { // history.back(), history.forward()
    render(new URL(window.location.href).pathname) // перередерюємо сторінку на шлях на який перейшли
  })

  // вішаємо обробники на всі посилання на сторінці щоб забезпечити 'безшовний' перехід
  document.querySelectorAll('[href^="/"]').forEach(el => {
    el.addEventListener('click', (evn) => {
      evn.preventDefault()
      if (evn.target instanceof HTMLAnchorElement) {
        const { pathname: path } = new URL(evn.target.href)
        goTo(path)
      }
    })
  })
  // для того щоб при першому відкриттю вкладки рендерився вміст
  render(new URL(window.location.href).pathname)
}

export default initRouter