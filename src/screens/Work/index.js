import React from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import styles from './Style.css'
//import { useNavigate } from "react-router-dom";
import Resume from "../Resume";
import { Button, Text } from "react-native-web";
import image from '/Users/famillebouassami/myresume/src/components/images/hdsi.png'
import bio from '/Users/famillebouassami/myresume/src/components/images/bio.jpg'


function Work() {
    
    
      
    

    

    

    return (
        <div>
            <h1 className = "Title">Work Experience</h1>
            <hr className="Line"/>
            <img className = "logo" src={image} alt="Italian Trulli"/>
            <div className = "textContainer">
                <p className = "workDescription" style = {{marginBottom:0}}>I am currently working with Professor Mikio Aoi
                on studying the efficiency of Model-based targeted dimensionality reduction on understanding neurons' activity in 
                the prefrontal cortex. </p>
                
                <p style={{margin : 0, paddingTop:0}} className = "ProjectLink"><a href="https://colab.research.google.com/drive/1aOFX5-iTEUwJleiUf90Iln4pDCUoTUS6#scrollTo=ET1quX2bFw1J" target="_blank">Python code</a></p>

            </div>
            <div className="vlContainer">
            <div className="vl">

                </div>



            
            </div>
            <div className = "logoDiv">
            <img className = "logo_2" src={bio} alt="Italian Trulli"/>
            
            </div>

            <div className = "textContainer">
                <p className = "workDescription" style = {{marginBottom:0}}>I worked with Professor Johnatan Aljadeff on understanding the stability of information processing in the brain from December 2020 to June 2021.</p>
                <Link to = "/Aljadeff">
                    <p style={{margin : 0, paddingTop:0}} className = "ProjectLink">Project report</p>
                </Link>
            </div>



        </div>



    )
}

export default Work;