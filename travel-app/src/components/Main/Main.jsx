import {data} from '../../helpers/data';

import React from 'react'
import ImageCard from "./imageCard"

function Main() {
    return (
        <div className="container">
          <div className="row">
            {/* {data.map(item => imageCards(item))} */}
            {data.map(item => <ImageCard data={item} />)}
          </div>
        </div>
      )
    }
    
export default Main

// const names=[
//     {fullname:{name:"xyz",lastName:"abc"}},
//     {fullname:{name:"asd",lastName:"dsa"}},
//     {fullname:{name:"133",lastName:"789"}},
//     {fullname:{name:"465",lastName:"654"}},
//   ]
  
// function MappingName(){
//     names.map(name => { 
//     return(
//         <p>{name.fullname.name} - {name.fullname.lastName}</p>
//     )}
// )}