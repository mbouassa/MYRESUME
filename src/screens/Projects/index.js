import React from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import styles from './Style.css'
//import { useNavigate } from "react-router-dom";
import Resume from "../Resume";
import { Button, Text } from "react-native-web";
import image from '/Users/famillebouassami/myresume/src/components/images/hdsi.png'
import bio from '/Users/famillebouassami/myresume/src/components/images/bio.jpg'
import snip from '/Users/famillebouassami/myresume/src/components/images/snipfeed.png'
import mp from '/Users/famillebouassami/myresume/src/components/images/MyPlan.png'
import mv from '/Users/famillebouassami/myresume/src/components/images/MyVacae.png'


function Projects() {
    
    
      
    

    

    

    return (
        <div>
            <h1 className = "Title">Projects</h1>
            <hr className="Line"/>
            <img className = "logomp" src={mp} alt="Italian Trulli"/>
            <div className = "textContainer">
                <p className = "workDescription" style = {{marginBottom:0}}>I am the co-founder and CEO of MyPlan which is an app
                 that uses artificial intelligence and machine learning to plan students' study times, track their sleep and physical activities.
                 I worked on the designs, the front end, the backend and on the AI model. 
                 Most of the code is private and confidential but I will share some of the AI code I worked on below.
                 </p>
                <div style = {{display: "flex",
    justifyContent: "center"}}>
                <p style={{margin : 0, paddingTop:0, display: "inline"}} className = "ProjectLink"><a href="https://mbouassa.github.io/MyPlan_website/" target="_blank">Website</a></p>
                <p style={{margin : 0, paddingTop:0, display: "inline", marginLeft: 10, marginRight: 10}} className = "ProjectLink">|</p>
                <p style={{margin : 0, paddingTop:0, display: "inline"}} className = "ProjectLink"><a href="https://colab.research.google.com/drive/1MjOWeuGQTbw-RTLIWftOL6V3oihCiGij#scrollTo=37eESJBL1EXd" target="_blank">AI</a></p>
                </div>
            </div>
            <div className="vlContainer">
            <div className="vl">

                </div>



            
            </div>
            <img className = "logomp" src={mv} alt="Italian Trulli"/>
            <div className = "textContainer">
                <p className = "workDescription" style = {{marginBottom:0}}>I am the co-founder and CTO of MyVacae which is a modern booking app 
                on which users can find hotels, airbnbs and hostels around the world on one single platform. We are currently developing the app and are aiming to have a finished product
                by December.
                 
                 </p>
                <div style = {{display: "flex",
    justifyContent: "center"}}>
                <p style={{margin : 0, paddingTop:0, display: "inline", marginBottom: 50}} className = "ProjectLink"><a href="https://mbouassa.github.io/MyVacae_website/" target="_blank">Website</a></p>
                
                </div>
            </div>
            


            
            



        </div>



    )
}

export default Projects;