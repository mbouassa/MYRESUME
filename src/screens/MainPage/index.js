import React from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import styles from './Style.css'
//import { useNavigate } from "react-router-dom";
import { Button, Text } from "react-native-web";
import image from '/Users/famillebouassami/myresume/src/components/images/pic_linkedin.jpeg'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';



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

                    <Link to = "Contact">

                    <text className = "categories">Contact</text>
                    </Link>


        
                </div>



                
            </div>

            <div className = "centerContainer">
            <div className = "links">   
            <a href="https://www.linkedin.com/in/mehdi-bouassami/" target="_blank">
         
                <AiFillLinkedin size={70} style = {{marginLeft:200}}/>
                                    </a>

 
            <img className = "imageCenter" src={image} alt="Italian Trulli"/>
            <a href="https://github.com/mbouassa?tab=repositories" target="_blank">

            <AiFillGithub size={70} style = {{marginRight:200}}/>
            </a>


            </div>   


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