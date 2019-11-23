import React, { Component } from 'react'
import { Form, Label, Button } from 'semantic-ui-react';

class Register extends Component { 
    constructor(){
        super();

        this.state = {
            username: '', 
            password: '', 
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarge.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hello')
        const registerResponse = await fetch(process.env.React_APP_API_URL + '/user/register', { 
            method: 'POST', 
            credentials: 'include', 
            body: JSON.stringify(this.state),
            headers: { 
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await registerResponse.json();
        
        if(parsedResponse.status.message === 'Success'){
            console.log('success login')
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

export default Register
