import React from 'react'
import Imagen1 from '../img/libro.jpg'


const Card = () => {
  return (
    <>
    <div className="card">
        <img  src={Imagen1} alt=".."/>
        <div className="bottom">
            <h3 className="title">Java</h3>  
            <p className="amount">&#8377;3290</p>      
        </div>    
    </div>
    </>
  )
}

export default Card