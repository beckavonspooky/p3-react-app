import React, { Component } from 'react'
import {List, Button} from 'semantic-ui-react'

function LocationList(props){
    const locations = props.locations.map((location) => {
        return(
            <List key={location.id}>
                <List.Item>
                    <List.Header>{location.loc_nam}</List.Header>
                    <List.icon name='map marker alternate'/>
                    <List.Header>Address
                        <List.Description>
                            {location.street_num}
                            {location.street_name}
                            {location.apt_unit_num}
                            {location.city}
                            {location.State}
                            {location.zipcode}
                        </List.Description>
                    </List.Header>
                    
                    <List.icon name='wheelchair'/>
                    <List.Header>ADA Compliant?
                        <List.Description>
                            {location.ada}
                        </List.Description>
                    </List.Header>

                    <List.Icon name='genderless'/>
                    <List.Header>Unisex Available?
                        <List.Description>
                            {location.unisex}
                        </List.Description>
                    </List.Header>

                    <List.icon name="clock outline"/>
                    <List.Header>Hours Open
                        <List.Description>
                            From: {location.open_time}
                            Till: {location.closing_time}
                        </List.Description>
                    </List.Header>

                    <List.icon name='compass'/>
                    <List.Header>Directions
                        <List.Description>
                            {location.Directions}
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
            { locations }
        </List.Group>
    )
}

export default LocationList

