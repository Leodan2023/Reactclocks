import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Title}</td>
                    <td>{props.Description}</td>
                    <td>{props.Material}</td>
                    <td>{props.Stock}</td>
                    <td>
                        <ul>
                            {props.Category.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Price}</td>
                </tr>
            )
    }
    
        

export default ChartRow;