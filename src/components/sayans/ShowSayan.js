import { 
    useState,
    useEffect, 
} from 'react'

import { 
    useParams,
    useNavigate 
} from 'react-router-dom'
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page

import { 
    Container,
    Card 
} from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneSayan} from '../../api/sayans'
import messages from '../shared/AutoDismissAlert/messages'

// We need to get the sayan's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

const ShowSayan = (props) => {
    const [sayan, setSayan] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { msgAlert } = props
    // destructuring to get the id value from our route parameters

    useEffect(() => {
        getOneSayan(id)
            .then(res => setSayan(res.data.sayan))
            .catch(err => {                   
                msgAlert({
                    heading: 'Error getting sayan',
                    message: messages.getSayansFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [])

    if (!sayan) {
        return <LoadingScreen />
    }

    return (
        <Container className="fluid">
            <Card>
                <Card.Header>{ sayan.fullTitle }</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div><small>Age: { sayan.age }</small></div>
                        <div><small>Type: { sayan.type }</small></div>
                        <div><small>
                            Strong: { sayan.strong ? 'yes' : 'no'}
                        </small></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ShowSayan