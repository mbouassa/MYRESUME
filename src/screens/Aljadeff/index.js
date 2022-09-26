import React, { useState, useEffect} from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import proj from '/Users/famillebouassami/myresume/src/components/Aljadeff.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Aljadeff() {
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
                <embed target="_blank" src={proj} width="100%" height="1000vh" />

       
          
      </div>
      )
};
export default Aljadeff;
