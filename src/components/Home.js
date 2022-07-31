import SayansIndex from './sayans/SayansIndex'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<>
			<h2>See List of Super Sayans</h2>
			<SayansIndex msgAlert={ msgAlert } />
		</>
	)
}

export default Home