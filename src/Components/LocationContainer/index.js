import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import CreateLocationForm from '../CreateLocationForm';
import { Grid, GridColumn } from 'semantic-ui-react';
import EditLocationModal from '../EditLocationModal';
import UserLocationsList from '../UserLocationsList';
import { thisExpression } from '@babel/types';

class LocationContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            locations: [],
            locationToEdit: {
                loc_name: '',
                address: '', 
            
            },
            showEditModal: false
        }
    }
    componentDidMount(){
        this.getLocations();
    }
    updateUserLocations = (location) =>{
        const userLocations = [...this.state.locations, location.data]
        console.log(userLocations, 'We be hitting it boyyyy')
        this.setState({
            locations: userLocations
        })

    }
    getLocations = async () => {
        try {
            const locations = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/locations/`, {
                method: 'GET',
                credentials: 'include'
            });
            const parsedLocation = await locations.json();
            console.log(parsedLocation);
            this.setState({
                locations: parsedLocation.data
            })
        } catch(err){
        console.log(err);
        }
    }
    addLocation = async (e, location) => {
        e.preventDefault();
        console.log('HITTING')
    
        try {
            const createdLocationResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/locations/`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(location),
                headers: {
                    'Content-Type': 'application/JSON'
                }
            });
            const parsedLocation = await createdLocationResponse.json();
            console.log(parsedLocation, "This is location response")
            //put locations living in state into a new array,
            this.setState({locations: [...this.state.locations, parsedLocation.data]})
        } catch(err){
            console.log("error")
            console.log(err)

        }

    }
    openUserLocAndEdit = (userLocationsList)=>{
        userLocationsList.user_id = userLocationsList.user_id.id
        console.log(userLocationsList, "here is the location")
        this.setState({
            showEditModal: true,
            locationToEdit: {
                ...userLocationsList
            }
        })
    }
    handleEditChange = e =>
        this.setState({
            locationToEdit: {
                ...this.state.locationToEdit,
                [e.currentTarget.name]: e.currentTarget.value
            }
        })
    closeAndEdit = async (e) => {
            e.preventDefault();
            try {
            
            const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/locations/${this.state.locationToEdit.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.locationToEdit),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const editResponseParsed = await editResponse.json();
            console.log(editResponseParsed, "<=====parsed location")
            //new location array with an edit
            
            const newLocationArrayWithEdit = this.state.locations.map(location => {
                if(location.id === editResponseParsed.data.id){
                    location = editResponseParsed.data
                }
                return location 
            });
            console.log(editResponseParsed, '<====parsed edit')
            this.setState({
                showEditModal: false,
                locations: newLocationArrayWithEdit
            });
            
            } catch(err){
                console.log(err)
            }
    }
    deleteLocation = async (id) => {
        console.log(id)
        
        const deleteLocationResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/locations/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        //parsed response from location
        const deleteLocationParsed = await deleteLocationResponse.json();
        console.log(deleteLocationResponse, 'hi delete loc')
        console.log(this.state.locations, '<<<<<---- before ')
        // need to remove it from the state

        this.setState({
            locations: this.state.locations.filter((location) => location.id !== id)})
        console.log(deleteLocationParsed, "Response from flask server")
        console.log(this.state.locations, '<<<<<---- after')
    }

    render(){
        console.log(this.state.locations)
        console.log(this.state)
        return (
            <Grid columns={1} divided textAlign="center" style={{ height: "100%" }} verticalAlign ="top" stackable ="false">
                <Grid.Row>
                    <Grid.Column>
                        
                    </Grid.Column>
                    <Grid.Column>
                        <CreateLocationForm
                        addLocation={this.addLocation} currentUser={this.props.currentUser} updateUserLocations={this.updateUserLocations}/>
                    </Grid.Column>
                    <Grid.Column>
                        <UserLocationsList 
                        locations= {this.state.locations} 
                        updateUserLocations={this.updateUserLocations}openUserLocAndEdit= {this.openUserLocAndEdit}
                        deleteLocation={this.deleteLocation}
                        />
                        <EditLocationModal 
                        locationToEdit={this.state.locationToEdit} 
                        showEditModal={this.state.showEditModal}
                        handleEditChange={this.handleEditChange}
                        closeAndEdit={this.closeAndEdit}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        
         )};
    }
      



export default withRouter(LocationContainer)