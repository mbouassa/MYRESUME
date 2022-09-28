import React from "react";
import styles from './Style.css'
//import { useNavigate } from "react-router-dom";



function Work() {
    
    
      
    

    

    

    return (
        <div>
            <h1 className = "Title">Contact information</h1>
            <hr className="Line"/>
            <div className = "textContainer">
                <h1 style = {{textAlign: "center"}}>Email Adress</h1>
                <p className = "workDescription" style = {{marginBottom:40}}>mbouassa@ucsd.edu</p>
                

            </div>
            
            

            <div className = "textContainer">
            <h1 style = {{textAlign: "center"}}>Phone number</h1>
                <p className = "workDescription" style = {{marginBottom:0}}>(858) 729-3884</p>
                
            </div>

          
            



        </div>



    )
}

export default Work;