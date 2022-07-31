import SayansIndex from './sayans/SayansIndex'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<div className='seelistcards imghome'>
			<div>
			{/* <img className='imghome'></img> */}
			<h2 >See List of Super Sayans</h2>
			<SayansIndex msgAlert={ msgAlert } />

			</div>
		</div>
			
			
		
	)
}

export default Home