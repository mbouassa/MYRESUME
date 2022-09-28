import React from 'react';
import {pdfjs } from "react-pdf";
import styles from './Style.css'

import resume from '/Users/famillebouassami/myresume/src/components/Resume_Mehdi-Bouassami.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
  
  
     
      return (


      <div>
                <embed target="_blank" src={resume} width="100%" height="1000vh" />

       
          
      </div>
      )
};
export default Resume;



