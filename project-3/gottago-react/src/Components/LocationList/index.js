import React, { Component } from 'react'
import {List, Button} from 'semantic-ui-react'

function LocationList(props){
    
    const locations = props.locations.map((location) => {
        return(
            <List key={location.id}>
                <List.Item>
                    <List.Header>{location.loc_name}</List.Header>
                    <List.icon name='map marker alternate'/>
                    <List.Header>Address
                        <List.Description>
                            {location.address}
                        </List.Description>
                    </List.Header>
            
                </List.Item>

                <List.Content extra>
                    <Button onClick={() => props.deleteLocation(location.id)}>Delete Location</Button>
                    <Button onClick={() => props.editLocation(location)}>Edit Location</Button>
                </List.Content>

            </List>

        )
    })

    return (
        <List.Group>
            {/* { locations } */}
        </List.Group>
    )
}

export default LocationList

