import React from 'react';

const List = ({restrooms}) => {
    console.log(restrooms)
    return (
        <div>
            <h1>Restroom List</h1>
            <ul>
                {restrooms.map((e, i) => {
                    return(
                        <div className="test" key={i}>
                             <li >
                                <b><u>{e.name}</u></b>
                                <br/>
                                {e.street}, {e.city}, {e.state}
                                <br/>
                                ADA: {e.accessible
                                ? 'Yes'
                                : 'No'}
                                <br/>
                                Unisex: {e.unisex
                                ? 'Yes'
                                : 'No'}
                                <br/>
                                Directions: {e.directions}
                                <hr/>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;

