import React from 'react'
import Imagen1 from '../img/libro.jpg'


const Card = ({book}) => {
    console.log(book)
  return (
    <>
    {
        book.map((item)=> {
            return(
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
        })
    }
    </>
  )
}

export default Card