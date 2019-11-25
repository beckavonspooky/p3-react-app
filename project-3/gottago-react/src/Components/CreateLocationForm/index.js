import React, { Component } from 'react'

import { Form, Button, Label, Segment } from 'semantic-ui-react'

class CreateLocation extends Component { 
    constructor(){
        super(); 
        this.state = {
            user_id: '', 
            loc_name: '', 
            address: ''
        };
    }
    
    handleChange = (e) => { 
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    renderButton = () => {
        return (
            <Button onClick={ () => this.showForm() }>Add Location</Button>
        )
    }

    showForm = () => {
        this.setState({formActive: true})
    }

    hideForm = () => {
        this.setState({formActive: false})
        console.log(this.addLocation())
    }

    checkFormDisplay = () => {
        if(this.state.formActive === false) {
            return this.renderButton() ;
        }
        else {
            return this.renderForm()
        }
    }

    newLocation = async (e, location) => {
        try {
            const createdLocationResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/locations/', {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({...this.state, user_id: this.props.currentUser.id}),
                headers: {
                    "Content-Type": "application/JSON"
                }
            });
            const parsedLocation = await createdLocationResponse.json();
            //put locations living in state into a new array,
            this.props.updateUserLocations(parsedLocation)
        } catch(err){
            console.log(err)

        }
    }

    renderForm() {
            return (
                <Segment>
                    
                    <h4>Add a New Restroom</h4>
                    {/* <Form onSubmit={(e) => this.props.addLocation(e, this.state)}> */}
                    <Form onSubmit={(e) => {this.newLocation(e, this.state)}}>
                        <Label>Restroom Name</Label>
                        <Form.Input type='text' name='loc_name' value={this.state.loc_name} onChange={this.handleChange}/>

                        <Label>Address</Label>
                        <Form.Input type='text' name='address' value={this.state.address} onChange={this.handleChange}/>
                     
                            <Button type='submit'>Submit</Button>
                            <Button typy='discard' onClick={() => {this.hideForm()}}>Discard</Button>
                    </Form>
                </Segment>
            )
    }

    render(){
        const {ada} = this.state
        console.log(ada, true);
        const {unisex} = this.state
        return (
        <div>{this.checkFormDisplay()}</div>
        )
    }
}

export default CreateLocation