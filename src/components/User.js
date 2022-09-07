import React from 'react';
import UserRow from './UserRow';

let tablesRowsData = [
    {
        Name: 'Jorge Andres Atehortua Henao',
        Nick: 'Andres',
        Email: 'andresatehortua@digitalhouse.com',
        Country: 'Colombia',
        Roll: 'super'
    },
    {
        Name: 'Leonardo Ezequiel Bellanza',
        Nick: 'Leo',
        Email: 'leobellanz@gmail.com',
        Country: 'Argentina',
        Roll: 'super'
    },
    {
        Name: 'Andres Atehortua Henao',
        Nick: 'Andres',
        Email: 'atehortua9620@gmail.com',
        Country: '[object Object]',
        Roll: 'standard'
    },
    {
        Name: 'Administrador',
        Nick: 'Admin',
        Email: 'admin@admin.com',
        Country: 'Colombia',
        Roll: 'super'
    },
    
]


function Charti (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Nick</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Roll</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Nick</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Roll</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tablesRowsData.map( ( row , i) => {
                                return <UserRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Charti;