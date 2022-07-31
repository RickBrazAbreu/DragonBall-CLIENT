import { 
    useState, 
    useEffect 
} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllSayans } from '../../api/sayans'
import messages from '../shared/AutoDismissAlert/messages'

// SayansIndex should make a request to the api
// To get all sayans
// Then display them when it gets them

// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const SayansIndex = (props) => {
    const [sayans, setSayans] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    console.log('Props in SayansIndex', props)

    useEffect(() => {
        console.log(props)
        getAllSayans()
            .then(res => setSayans(res.data.sayans))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Sayans',
                    message: messages.getSayansFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    // If sayans haven't been loaded yet, show a loading message
    if (!sayans) {
        return <LoadingScreen />
    } else if (sayans.length === 0) {
        return <p>No sayans yet. Better add some.</p>
    }

    const sayanCards = sayans.map(sayan => (
        <Card style={{ width: '30%', margin: 5}} key={ sayan.id }>
            <Card.Header>{ sayan.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/sayans/${sayan.id}`}>View { sayan.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div style={ cardContainerStyle }>
            { sayanCards }
        </div>
    )
}

export default SayansIndex