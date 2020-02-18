import { e, jarvis } from './lib.js'

function App() {
	return e.div.wrapper(
		e.header(
			e.div.container(
				{ style: { textAlign: 'center' } },
				e.div.logo(
					e.img({
						src: '/assets/logo.svg',
						style: { maxWidth: '100%' },
					})
				),
				e.h1('A Modern Applications Framework')
			)
		),
		e.content(
			e.div.container(
				e.p(
					e.a.button({ href: 'http://github.com/samholmes/iron' }, 'Docs'),
					e.a.button({ href: 'http://github.com/samholmes/iron' }, 'GitHub')
				)
			)
		),
		e.footer(e.div.container(e.p(e._unsafe('&copy;'), ' Copyright')))
	)
}

jarvis.render(App(), document.getElementById('root'))
