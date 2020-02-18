import { e, v, jarvis } from './iron.js'

const name = v('World')
const message = v(() => `Hello ${name}!`)

const page = e.div(
	e.p.message(message),
	e.button({ click: () => (name.v = 'Iron') }, 'Click me!')
)

jarvis.render(page, document.getElementById('root'))
