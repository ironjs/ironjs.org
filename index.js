import { e, jarvis } from './iron.js'

function App() {
	return e.div.wrapper(
		e.header(
			e.div.logo(
				e.img({
					src: '/assets/logo.svg',
					width: 300,
				})
			),
			e.nav(
				e.a({ href: 'http://github.com/samholmes/iron#features' }, 'Features'),
				e.a({ href: 'http://github.com/samholmes/iron#documentation' }, 'Docs'),
				e.a({ href: 'http://github.com/samholmes/iron' }, 'GitHub')
			)
		),
		e.content(
			e.div.columns(
				e.div.column(
					e.h1('Re-think Application Frameworks'),
					e.p(`
						Write code in plain JavaScript with no JSX or compiler required. 
						Structure your app with declarative-style programming and without a Virtual-DOM.
					`),
					e.p(
						e.a.button(
							{ href: 'http://github.com/samholmes/iron#documentation' },
							'Get Started'
						)
					),
					e.p(e.em('* Iron is alpha and highly experimental.'))
				),
				e.div.column.codePreview(
					e.img({
						src: '/assets/example-screenshot.png',
						style: { width: '100%' },
					})
				)
			)
		),
		e.footer(e.p('Copyright ', e._unsafe('&copy;'), ' 2020'))
	)
}

jarvis.render(App(), document.getElementById('root'))
