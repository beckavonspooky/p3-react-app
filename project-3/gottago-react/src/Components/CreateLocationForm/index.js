import React, { Component } from 'react'

import { Form, Button, Label, Segment } from 'semantic-ui-react'

class CreateLocation extends Component { 
    constructor(){
        super(); 

        this.state = {
            user_id: '', 
            loc_name: '', 
            created_at: '', 
            street_num: '', 
            street_name: '', 
            apt_unit_num: '', 
            city: '', 
            state: '',
            zipcode: '', 
            ada: null, 
            unisex: null, 
            open_time: '', 
            closing_time: '', 
            directions: '', 
            formActive: false
        };
        this.handleAdaRadio = this.handleAdaRadio.bind(this);
        this.handleUnisexRadio = this.handleUnisexRadio.bind(this);
    }
    // event handler for ADA compliance true/false 
    handleAdaRadio = (e) => {
        const isAda = e.currentTarget.value === 'true' ? true: false;
        console.log('handle', this.ada)
        this.setState(this.ada);
    }
    handleUnisexRadio = (e) => {
        const isUnisex = e.currentTarget.value === 'true' ? true: false;
        console.log('handle', this.unisex)
        this.setState(this.unisex);
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
        console.log('Test')
        console.log(location)
        // e.preventDefault();
        console.log('HITTING')
        console.log(this.state)
        console.log(this.currentUser, "<------- this is the current user")
        
    //     try {
    //         const createdLocationResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/locations/', {
    //             method: "POST",
    //             credentials: "include",
    //             body: JSON.stringify({...this.state, user_id: this.props.currentUser.id}),
    //             headers: {
    //                 "Content-Type": "application/JSON"
    //             }
    //         });
    //         const parsedLocation = await createdLocationResponse.json();
    //         console.log(parsedLocation, "This is location response")
    //         //put locations living in state into a new array,
    //         this.setState({locations: [...this.state.locations, parsedLocation.data]})
    //     } catch(err){
    //         console.log(err)

    // }
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
                        {/* <Label>Street Number</Label>
                        <Form.Input type='text' name='street_num' value={this.state.street_num} onChange={this.handleChange}/>
    
                        <Label>Street Name</Label>
                        <Form.Input type='text' name='street_name' value={this.state.street_name} onChange={this.handleChange}/>
    
                        <Label>Apt or Unit #</Label>
                        <Form.Input type='text' name='apt_unit_num' value={this.state.apt_unit_num} onChange={this.handleChange}/>
    
                        <Label>City</Label>
                        <Form.Input type='text' name='city' value={this.state.city} onChange={this.handleChange}/>
    
                        <Label>State</Label>
                        <Form.Input type='text' name='State' value={this.state.State} onChange={this.handleChange}/>
    
                        <Label>Zipcode</Label>
                        <Form.Input type='text' name='zipcode' value={this.state.zipcode} onChange={this.handleChange}/>
                        
                        <Label>Opens at:</Label>
                        <Form.Input type='text' name='open_time' value={this.state.open_time} onChange={this.handleChange}/>
    
                        <Label>Closes at:</Label>
                        <Form.Input type='text' name='closing_time' value={this.state.closing_time} onChange={this.handleChange}/>
    
                        <Label>Directions</Label>
                        <Form.Input type='text' name='Directions' value={this.state.Directions} onChange={this.handleChange}/> */}
    
                        
                        {/* <Label>ADA Compliant?</Label>
                        <div className="radio">
                            <Label>
                                <Form.Input 
                                    type='radio'
                                    name='ada' 
                                    value='true' 
                                    checked={this.handleAdaRadio.ada === true}
                                    onChange={this.props.handleAdaRadio} />
                                    YES
                            </Label>
                        </div>
                        <div className="radio">
                            <Label>
                                <Form.Input
                                    type='radio'
                                    name='ada'
                                    value='false'
                                    checked={this.handleAdaRadio.ada === false}
                                    onChange={this.handleAdaRadio}/>
                                    NO
                            </Label>
                        </div>
                        <Label>Unisex?</Label>
                        <div className="radio">
                            <Label>
                                <Form.Input 
                                    type='radio'
                                    name='unisex'
                                    value='true'
                                    checked={this.handleUnisexRadio.unisex === true}
                                    onChange={this.handleUnisexRadio}/>
                                    YES
                            </Label>
                        </div>
                        <div className="radio">
                            <Label>
                                <Form.Input
                                    type='radio'
                                    name='unisex'
                                    value='false'
                                    checked={this.handleUnisexRadio.unisex === false}
                                    onChange={this.handleUnisexRadio}/>
                                    NO
                            </Label>
                        </div> */}
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