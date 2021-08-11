import Home from './Home.svelte'

const home = new Home({
	target: document.body,
	props: { name: 'Home' }
})

export default home
