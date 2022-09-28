import React, { useState} from 'react';
import {pdfjs } from "react-pdf";
import proj from '/Users/famillebouassami/myresume/src/components/Aljadeff.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Aljadeff() {

     
      return (


      <div>
                <embed target="_blank" src={proj} width="100%" height="1000vh" />

       
          
      </div>
      )
};
export default Aljadeff;
