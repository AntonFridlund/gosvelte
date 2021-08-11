import Profile from './Profile.svelte'

const profile = new Profile({
	target: document.body,
	props: { name: 'Profile' }
})

export default profile
