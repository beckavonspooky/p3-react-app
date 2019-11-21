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
                    <Form.Input type='text' name='loc_name' value={this.state.loc_name} onChange={this.handleChange}/>

                    <Label>Street Number</Label>
                    <Form.Input type='text' name='street_num' value={this.state.street_num} onChange={this.handleChange}/>

                    <Label>Street Name</Label>
                    <Form.Input type='text' name='street_name' value={this.state.street_name} onChange={this.handleChange}/>

                    <Label>Apt or Unit #</Label>
                    <Form.Input type='text' name='apt_unit_num' value={this.state.apt_unit_num} onChange={this.handleChange}/>

                    <Label>City</Label>
                    <Form.Input type='text' name='city' value={this.state.city} onchange={this.handleChange}/>

                    <Label>State</Label>
                    <Form.Input type='text' name='State' value={this.state.State} onChange={this.handleChange}/>

                    <Label>Zipcode</Label>
                    <Form.Input type='text' name='zipcode' value={this.state.zipcode} onChange={this.handleChange}/>
                    
                    <Label>Opens at:</Label>
                    <Form.Input type='text' name='open_time' value={this.state.open_time} onChange={this.handleChange}/>

                    <Label>Closes at:</Label>
                    <Form.Input type='text' name='closing_time' value={this.state.closing_time} onChange={this.handleChange}/>

                    <Label>Directions</Label>
                    <Form.Input type='text' name='Directions' value={this.state.Directions} onChange={this.handleChange}/>
                       
                    <Label>ADA Compliant?</Label>
                    <div className="ada-radio">
                        <Label>
                            <Form.Input 
                                type='radio' 
                                name='ada' 
                                value='true' 
                                checked={ada === true}
                                onChange={this.handleAdaRadio} />
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
                                onChange={this.handleAdaRadio}/>
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
                                onChange={this.handleUnisexRadio}/>
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
                                onChange={this.handleUnisexRadio}/>
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