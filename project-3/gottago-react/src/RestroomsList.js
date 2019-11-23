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
                                {e.name}
                                <br/>
                                {e.latitude}
                                <br/>
                                {e.longitude}

                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;

