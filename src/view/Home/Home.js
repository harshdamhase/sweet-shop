import React from 'react'

import confi from './../../util/confi.json'

function Home() {

    return (
        <div>
            <h1 className='text-center' style={{ backgroundColor: confi.theme.accentColor }}>{confi.title}</h1>
            <p className='text-center' style={{ color: confi.theme.primaryColor }}
            >{confi.description}</p>
            <h2 className='text-center' style={{ color: confi.theme.secondaryColor }}
            >Services</h2>
           
            {
                confi.services.map((serviceData, index) => {
                    const { title, description, price } = serviceData

                    return (
                        <div className='card m-3 p-2' key={index}>
                            <div className='card-title ' style={{ color: confi.theme.secondaryColor }}>{title}</div>
                            <div className='card-text'>{description}</div>
                            <p className='card-text'>Price: {price}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}


export default Home


