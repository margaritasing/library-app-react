import React from 'react'
import './style.css'
import Imagen from '../img/ninos.png'

const Main = () => {
  return (
    <>
    <div className="header">
        <div className="row1">
            <h1>A room without books is like <br/> a body without a soul</h1>        
        </div>  
        <div className="row2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input type="text" placeholder="Enter Your Book Name" />    
                <button><i className="fas fa-search"></i> </button>                    
            </div>
            <img src={Imagen} alt=".." />        
        </div>   
     </div>
     <div className="container">
     
     </div>
    
    </>
  )
}

export default Main