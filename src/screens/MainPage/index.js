import React from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import styles from './Style.css'
//import { useNavigate } from "react-router-dom";
import { Button, Text } from "react-native-web";
import image from '/Users/famillebouassami/myresume/src/components/images/pic_linkedin.jpeg'

function MainPage() {
    
    
      
    

    

    

    return (
        <div>
            <div className="statusBar">
                <div className = "nameContainer">
                    <text className = "Name">Mehdi Bouassami</text>
                </div>


                <div className = "rightContainer">
                    <Link to = "Resume">
                        <text className = "categories">Resume</text>
                    </Link>
                    <Link to = "Work">
                        <text className = "categories">Work Experience</text>
                    </Link>

                    <Link to = "Projects">
                        <text className = "categories">Projects</text>
                    </Link>


                    <text className = "categories">Contact</text>

        
                </div>



                
            </div>
            <div className = "centerContainer">
            <img className = "imageCenter" src={image} alt="Italian Trulli"/>

            <h1 className = "nameCenter">Mehdi Bouassami</h1>
            <hr className = "line" /> 
            <p className = "description">Data Scientist, Undergrad @ University of California San Diego</p>
            </div>
                
                
                
                
            
        <div>
        
      </div>
            

            




        </div>



    )
}

export default MainPage;