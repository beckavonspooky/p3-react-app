import React from 'react'
import { Modal, Form, Button, Label, Header} from 'semantic-ui-react'


const EditLocationModal = (props) => {
    console.log(props)
    return (
        <Modal open={props.showEditModal}>
            <Header>Edit Restroom</Header>
            <Modal.Content>
                <Form onSubmit={props.closeAndEdit}>
                <Label>Restroom Name</Label>
                    <Form.Input type='text' name='loc_name' value={props.locationToEdit.loc_name} onChange={props.handleEditChange}/>

                    <Label>Address</Label>
                    <Form.Input type='text' name='address' value={props.locationToEdit.address} onChange={props.handleEditChange}/>
                    <Modal.Actions>
                        <Button color='blue' type='submit'>Edit Restroom</Button>
                    </Modal.Actions>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default EditLocationModal;