import React, { useState, useEffect} from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import resume from '/Users/famillebouassami/myresume/src/components/Resume_Mehdi-Bouassami.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
     
      return (


      <div>
                <embed target="_blank" src={resume} width="100%" height="1000vh" />

       
          
      </div>
      )
};
export default Resume;



