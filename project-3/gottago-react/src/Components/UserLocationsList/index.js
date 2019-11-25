import React from 'react'
import {List, Button} from 'semantic-ui-react'

function UserLocationsList(props) {

    const locations = props.locations.map(location =>{

        return(
            <List key={location.id}>
                <List.Item>
                    <List.Header>{location.loc_name}</List.Header>
                    <List.Header>address
                        <List.Description>
                            {location.address}
                        </List.Description>
                    </List.Header>
                </List.Item>
                
                <List.Content extra>
                    <Button>Delete Location</Button>
                    <Button>Edit Location</Button>
                </List.Content>

            </List>
        )

    })
    return (
        <div>
            <h1>User Submitted Restrooms</h1>
            {locations}
            
        </div>
    )
}

export default UserLocationsList
