import React, { useState } from 'react'
import './style.css'
import Imagen from '../img/ninos.png'
import Card from './Card'

import axios from 'axios'

const Main = () => {
    const [search, setSearch]= useState("");
    const [bookData, setData] = useState([]);
    const clave = "AIzaSyDFJhxpPnO62QwRJFl9-IyKw7M3mm4d1Wg";
    const searchBook =(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q='+search+'&key=${clave}`)
            .then(res=> setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

  return (
    <>
    <div className="header">
        <div className="row1">
            <h1>A room without books is like <br/> a body without a soul</h1>        
        </div>  
        <div className="row2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input type="text" placeholder="Enter Your Book Name"
                value={search} onChange={e=> setSearch(e.target.value)}
                onKeyPress={searchBook}              
                />    
                <button><i className="fas fa-search"></i> </button>                    
            </div>
            <img src={Imagen} alt=".." />        
        </div>   
     </div>
     <div className="container">
     {         
         <Card book={bookData}/> 
     }
        
     </div>
    
    </>
  )
}

export default Main