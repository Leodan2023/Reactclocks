import React from 'react';


function UserRow(props){
    return (
                <tr>
                    <td>{props.Name}</td>
                    <td>{props.Nick}</td>
                    <td>{props.Email}</td>
                    <td>{props.Country}</td>
                    <td>{props.Roll}</td>
                    {/* <td>
                        <ul>
                            {props.Category.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Price}</td> */}
                </tr>
            )
    }
    
        

export default UserRow;