import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Tommy Hilfiger',
        Description: 'Tommy Hilfiger-George 1710344 watch is one of the worlds most recognized lifestyle brands carrying the vision of classic American sportwear. The watch brand is no different with a clever sporty and casual look that appeals to everyone.',
        Material: 'Steel F20360/1',
        Stock: '10',
        Category: ['Men'],
        Price: 'USD 272.49'
    },
    {
        Title: 'Rado',
        Description: 'Excellent antique original quartz needle clock',
        Material: 'Reinforced stainless steel',
        Stock: '5',
        Category: ['Men'],
        Price: 'USD 650,35'
    },
    {
        Title: 'Casio Unlimited',
        Description: 'Limited version of the best Casio watch, with a white gold plating on its mesh and a navy blue background, which enhances the beauty of the watch.',
        Material: 'Reinforced stainless steel',
        Stock: '15',
        Category: ['Men'],
        Price: 'USD 850,75'
    },
    {
        Title: 'Wall Watch',
        Description: 'Modern Minimalist Large Classic Quartz Wall Clock',
        Material: 'Plastic',
        Stock: '20',
        Category: ['Unisex'],
        Price: 'USD 11,49'
    },
    {
        Title: 'Festina',
        Description: 'Festina watches are the perfect blend of elegance and functionality. Festina offers distinguished designs, constant technological innovation and excellent value for money.',
        Material: 'Steel F20360/2',
        Stock: '5',
        Category: ['Men'],
        Price: 'USD 293,33'
    },
    {
        Title: 'Orient',
        Description: 'Beautiful womens watch that combines elegance and style',
        Material: 'Stainless steel',
        Stock: '25',
        Category: ['Woman'],
        Price: 'USD 223,55'
    },
    {
        Title: 'Generico',
        Description: 'Smart Watch Running Cardio Pressure Oxygen Notifications',
        Material: 'Silicone',
        Stock: '5',
        Category: ['Unisex'],
        Price: 'USD 101,49'
    },
    {
        Title: 'Huawei Watch 2 GT Pro Sport',
        Description: 'Huawei smartwatches stand out for their sophistication and classic aesthetics. Another point that stands out in the smartwatches of the Chinese brand is the durability of the battery, in addition to its sports and health control features.',
        Material: 'Fluoroelastomer',
        Stock: '10',
        Category: ['Unisex'],
        Price: 'USD 367,25'
    },
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Material</th>
                                <th>Stock</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Material</th>
                                <th>Stock</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;