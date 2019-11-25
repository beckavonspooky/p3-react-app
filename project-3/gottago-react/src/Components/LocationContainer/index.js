import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import LocationList from '../LocationList'
import CreateLocationForm from '../CreateLocationForm';
import { Grid, GridColumn } from 'semantic-ui-react';
import EditLocationModal from '../EditLocationModal';
import UserLocationsList from '../UserLocationsList';

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
        this.setState=({
            locations: userLocations
        })
        this.props.history.push('/locations')

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
    deleteLocation = async (id) => {
        console.log(id)
        const deleteLocationResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/locations/id`, {
            method: 'DELETE',
            credentials: 'include'
        });
        //parsed response from location
        const deleteLocationParsed = await deleteLocationResponse.json();
        console.log(deleteLocationResponse)
    // need to remove it from the state
        this.setState({Locations: this.props.locations.filter((location) => location.id !== id)})
        console.log(deleteLocationParsed, "Response from flask server")
    }

    closeAndEdit = async (e) => {
        e.preventDefault();
        try {

        const editLocation = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/locations/`+ this.state.locationToEdit.id, {
            method: "PUT",
            body: JSON.stringify(this.state.locationToEdit),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const editLocationParsed = await editLocation.json();
        console.log(editLocationParsed, "parsed location")
        //new location array with an edit
        const newLocationArrayWithEdit = this.state.location.map((location) => {
            if(location.id === editLocationParsed.data.id){
                location = editLocationParsed.data
            }
            return location
        });
        this.setState({
            showEditModal: false,
            locations: newLocationArrayWithEdit
        });

        } catch(err){
            console.log(err)
        }
    }
    openAndEdit = (locationFromTheList) => {
        console.log(locationFromTheList, " locationToEdit ");

        this.setState({
            showEditModal: true,
            locationToEdit: {
                ...locationFromTheList
            }
        })

    }
    handleEditChange = (e) => {
        this.setState({
            locationToEdit: {
                ...this.state.locationToEdit,
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    }
    
    render(){
        return (
            <Grid columns={2} divded textAlign="center" style={{ height: "100%" }} verticalAlign ="top" stackable>
                <Grid.Row>
                    <Grid.Column>
                        {/* <LocationList locations={this.state.locations} deleteLocation={this.deleteLocation}
                        openAndEdit={this.openAndEdit}/> */}
                    </Grid.Column>
                    <Grid.Column>
                        <CreateLocationForm addLocation={this.addLocation} currentUser={this.props.currentUser} updateUserLocations={this.updateUserLocations}/>
                    </Grid.Column>
                    <Grid.Column>
                        <UserLocationsList locations= {this.state.locations}/>
                        {/* <EditLocationModal handleEditChange={this.handleEditChange} open=
                        {this.state.showEditModal} locationToEdit={this.state.locationToEdit}
                        closeAndEdit={this.closeAndEdit} handleAdaRadio={this.state.handleAdaRadio}/> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        
         )};
    }
      



export default withRouter(LocationContainer)