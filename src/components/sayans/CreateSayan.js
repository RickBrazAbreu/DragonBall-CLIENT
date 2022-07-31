import { useState } from 'react'

import SayanForm from '../shared/SayanForm'

const CreateSayan = (props) => {
    const [sayan, setSayan] = useState({
        name: '',
        type: '',
        age: '',
        adoptable: false
    })

    const handleChange = (e) => {
        setSayan(prevSayan => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            const updatedSayan = {
                [updatedName]: updatedValue
            }
            return {
                ...prevSayan,
                ...updatedSayan
            }
        })
    }

    return <SayanForm sayan={ sayan } handleChange={ handleChange } />
}

export default CreateSayan