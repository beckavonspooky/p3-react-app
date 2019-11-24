import React, {Component} from 'react'
import { Label, Button, Form} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
class Login extends Component{
    constructor(){
        super();
        this.state={
            user_id: '',
            username: '',
            email: '',
            password: '',
        }
    }
    handleLoginChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleLoginSubmit = async (e) => {
        e.preventDefault();
        this.props.loginUser(this.state)
        const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, { 
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
        if(parsedResponse.status.message === "Success"){
            console.log(parsedResponse)
            
            this.props.doUpdateCurrentUser(parsedResponse.data)
            this.props.history.push('/locations');
        }
    }
    render(){
        return(
            <Form onSubmit={this.handleLoginSubmit}>
                <Label>Username</Label>
                <Form.Input type='text' name='username' onChange={this.handleLoginChange} />
                <Label>Email</Label>
                <Form.Input type='email' name='email' onChange={this.handleLoginChange} />
                <Label>Password</Label>
                <Form.Input type='password' name='password' onChange={this.handleLoginChange}/>
                <Button type="Submit" color="blue">Login</Button>
            </Form>
        )
    }
}
export default withRouter(Login)