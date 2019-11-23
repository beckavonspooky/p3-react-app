import React, {Component} from 'react';
import { NavLink }from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';

const HeaderComponent = (props) => {
    return (
        <Header>
            <List>
                <List.Item>
                    <NavLink to ="/locations">Home</NavLink>
                    <NavLink to="/locations">Location</NavLink>
                    {
                        props.isLogged
                        ?   <button onClick={() => props.logoutUser()}>Logout</button>
                        :   [<NavLink to ="/login">Login</NavLink>, <NavLink to ="/">Register</NavLink>]
                    }
                </List.Item>
            </List>
        </Header>
    )
}
export default HeaderComponent;