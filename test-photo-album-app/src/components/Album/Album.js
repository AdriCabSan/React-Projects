import React from 'react'
import { Ars } from 'ars-arsenal'
export const Album = ({title,options})=>{
    // console.log(options)
   
        return(
            <div className="example">
            <div className="example-content">
              <h2 className="type-subheading">{title}</h2>
              <Ars {...options} />
            </div>
          </div>
        )
    
}
