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
                <p className = "workDescription" style = {{marginBottom:0}}>mbouassa@ucsd.edu</p>
                

            </div>
            
            

            <div className = "textContainer">
            <h1 style = {{textAlign: "center"}}>Phone number</h1>
                <p className = "workDescription" style = {{marginBottom:0}}>(858)729-3884</p>
                
            </div>

            <div className="vlContainer">
            <div className="vl">

                </div>



            
            </div>


            <div className = "logoDiv">
            <img style = {{marginTop:50}} className = "logo_2" src={snip} alt="Italian Trulli"/>
            
            </div>

            <div className = "textContainer">
                <p className = "workDescription" style = {{marginBottom:50, marginTop:10}}>
                    I have been working at Snipfeed as a part time data science intern since July 2021.
                    I worked with a team of computer scientists and designers on creating new monetization tools 
                    for creators. I also worked on testing new web app features to increase user retention
                </p>
                
            </div>



        </div>



    )
}

export default Work;