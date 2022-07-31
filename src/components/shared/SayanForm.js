import { 
    Form,
    Button, 
} from 'react-bootstrap'

const SayanForm = (props) => {
    const { sayan, handleChange } = props

    return (
        <Form>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
                placeholder="What is your sayan's name?"
                name="name"
                id="name"
                value={ sayan.name }
                onChange={ handleChange }
            />
            <Form.Label htmlFor="type">Type</Form.Label>
            <Form.Control
                placeholder="What kind of sayan is this?"
                name="type"
                id="type"
                value={ sayan.type }
                onChange={ handleChange }
            />
            <Form.Label htmlFor="age">Age</Form.Label>
            <Form.Control
                placeholder="How old is your sayan?"
                type="number"
                name="age"
                id="age"
                value={ sayan.age }
                onChange={ handleChange }
            />
            <Form.Check
                label="Is this sayan adoptable?"
                name="adoptable"
                defaultChecked={ sayan.strong  }
                onChange={ handleChange }
            />
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default SayanForm