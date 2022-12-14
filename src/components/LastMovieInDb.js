import React from 'react';
import imagenFondo from '../assets/images/reloj-sport.png';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last Clock in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Huawei Watch 2 GT Pro Sport. Huawei smartwatches stand out for their sophistication and classic aesthetics. Another point that stands out in the smartwatches of the Chinese brand is the durability of the battery, in addition to its sports and health control features.

USD 367,25</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="http://localhost:3001/product/detail/8">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
