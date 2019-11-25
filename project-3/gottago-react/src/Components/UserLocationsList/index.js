import React from 'react'

function UserLocationsList(props) {

    const locations = props.locations.map(location =>{

        return(
            <div>
                <h1>{location.loc_name}</h1>
                <h1>{location.address}</h1>
            </div>
        )

    })
    return (
        <div>
            {locations}
            
        </div>
    )
}

export default UserLocationsList
