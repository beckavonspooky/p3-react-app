import React, { Component } from 'react'
import { Form, Label, Button } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'
class Register extends Component { 
    constructor(){
        super();
        this.state = {
            user_id: '',
            username: '', 
            password: '', 
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(process.env)
        const registerResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/register`, { 
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
              }
        });
        const parsedResponse = await registerResponse.json();
        if(parsedResponse.status.message === 'It worked'){
            console.log(parsedResponse)
            // this.props.doUpateCurrentUser(parsedResponse.data)
            this.props.history.push('/locations');
        }
    }
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>Username</Label>
                <Form.Input type='text' name='username' onChange={this.handleChange} />
                <Label>Email</Label>
                <Form.Input type='email' name='email' onChange={this.handleChange} />
                <Label>Password</Label>
                <Form.Input type='password' name='password' onChange={this.handleChange}/>
                <Button type="Submit" color="blue">Register</Button>
            </Form>
        )
    }
}   
export default withRouter(Register)
