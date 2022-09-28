import React from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import styles from './Style.css'
//import { useNavigate } from "react-router-dom";
import Resume from "../Resume";
import { Button, Text } from "react-native-web";
import image from '/Users/famillebouassami/myresume/src/components/images/hdsi.png'
import bio from '/Users/famillebouassami/myresume/src/components/images/bio.jpg'
import snip from '/Users/famillebouassami/myresume/src/components/images/snipfeed.png'


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