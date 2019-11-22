import React from 'react'
import { Modal, Form, Button, Label, Header} from 'semantic-ui-react'

const EditLocationModal = (props) => {
    console.log(props)
    return (
        <Modal open={props.open}>
            <Header>Edit Restroom</Header>
            <Modal.Content>
                <Form onSubmit={props.closeAndEdit}>
                <Label>Restroom Name</Label>
                    <Form.Input type='text' name='loc_name' value={props.locationToEdit.loc_name} onChange={props.handleChange}/>

                    <Label>Street Number</Label>
                    <Form.Input type='text' name='street_num' value={props.locationToEdit.street_num} onChange={props.handleChange}/>

                    <Label>Street Name</Label>
                    <Form.Input type='text' name='street_name' value={props.locationToEdit.street_name} onChange={props.handleChange}/>

                    <Label>Apt or Unit #</Label>
                    <Form.Input type='text' name='apt_unit_num' value={props.locationToEdit.apt_unit_num} onChange={props.handleChange}/>

                    <Label>City</Label>
                    <Form.Input type='text' name='city' value={props.locationToEdit.city} onchange={props.handleChange}/>

                    <Label>State</Label>
                    <Form.Input type='text' name='State' value={props.locationToEdit.State} onChange={props.handleChange}/>

                    <Label>Zipcode</Label>
                    <Form.Input type='text' name='zipcode' value={props.locationToEdit.zipcode} onChange={props.handleChange}/>
                    
                    <Label>Opens at:</Label>
                    <Form.Input type='text' name='open_time' value={props.locationToEdit.open_time} onChange={props.handleChange}/>

                    <Label>Closes at:</Label>
                    <Form.Input type='text' name='closing_time' value={props.locationToEdit.closing_time} onChange={props.handleChange}/>

                    <Label>Directions</Label>
                    <Form.Input type='text' name='Directions' value={props.locationToEdit.Directions} onChange={props.handleChange}/>
                       
                    <Label>ADA Compliant?</Label>
                    <div className="ada-radio">
                        <Label>
                            <Form.Input 
                                type='radio' 
                                name='ada' 
                                value='true' 
                                checked={ada === true}
                                onChange={props.handleAdaRadio} />
                                YES
                        </Label>
                    </div>
                    <div className="ada-radio">
                        <Label>
                            <Form.Input
                                type='radio'
                                name='ada'
                                value='false'
                                checked={ada === false}
                                onChange={props.handleAdaRadio}/>
                                NO
                        </Label>
                    </div>
                    <Label>Unisex?</Label>
                    <div className="unisex-radio">
                        <Label>
                            <Form.Input 
                                type='radio'
                                name='unisex'
                                value='true'
                                checked={unisex === true}
                                onChange={props.handleUnisexRadio}/>
                                YES
                        </Label>
                    </div>
                    <div className="unisex-radio">
                        <Label>
                            <Form.Input
                                type='radio'
                                name='unisex'
                                value='false'
                                checked={unisex === false}
                                onChange={props.handleUnisexRadio}/>
                                NO
                        </Label>
                    </div>
                    <Modal.Actions>
                        <Button color='blue' type='submit'>Edit Restroom</Button>
                    </Modal.Actions>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default EditLocationModal;