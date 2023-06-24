import React,{useEffect,useRef} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Button from '@mui/material/Button';
import { BiArrowToBottom ,BiDownArrowAlt} from "react-icons/bi";
// import pdfMake from 'pdfmake/build/pdfmake';
import {generatePDF} from './pdf'
// import './extern.js'



const Topnavbar = () => {
const ref = useRef(null)

useEffect(() => {
  const importExternalScript = async () => {
    const externalScript = await import('./extern.js');
    // Use the functions/variables from the imported module
    
    // console.log(externalScript.someVariable);
  };

  importExternalScript();
}, []);



  return (
    <>
    <header id="page-topbar" >
      <div className="layout-width">
        <div className="navbar-header">
            <div className="d-flex">
                <span className="logo-lg">
                    <img src="assets/images/logo.png" alt="" height="60" />
                </span>
                  <Button  onClick={generatePDF}  size="small" title="Download cv">
                      Download cv <BiArrowToBottom className='icon-size'/> 
                  </Button> 
            </div>
            <div className='d-flex align-items-start'>
                <div>
                  <a href="https://github.com/Yvanmutara" target='_blank_' className="avatar-xs d-block">
                      <span className="avatar-title rounded-circle fs-16 bg-dark text-light shadow">
                          <GitHubIcon fontSize="small" />
                      </span>
                  </a>
                </div>
                <div>
                  <a href="#javascript" className="avatar-xs d-block">
                      <span className="avatar-title rounded-circle fs-16 bg-primary shadow">
                      <LinkedInIcon fontSize="small" />
                      </span>
                  </a>
                </div>
                {/* <div>
                  <a href="https://www.facebook.com/tadjer.ndinda/" target='_blank_' className="avatar-xs d-block">
                      <span className="avatar-title rounded-circle fs-16 bg-primary shadow">
                          <FacebookOutlinedIcon fontSize="small" />
                      </span>
                  </a>
                </div> */}
                {/* <div>
                  <a href="https://www.instagram.com/geniusgen20/" target='_blank_' className="avatar-xs d-block">
                      <span className="avatar-title rounded-circle fs-16 bg-danger shadow">
                          <InstagramIcon fontSize="small" />
                      </span>
                  </a>
                </div> */}
            </div>
            
          <div className="d-flex align-items-center">
            <div className="d-flex flex-wrap gap-1" >          
             
            </div>
          </div>
          <div className='d-flex align-items-center'>
              <div className="ms-1 header-item d-none d-sm-flex">
                  <button type="button"  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" data-toggle="fullscreen" >
                    <FullscreenIcon />
                  </button>
              </div>
          </div>
        </div>      
      </div>
    </header>
    
  <div className="vertical-overlay"></div>
  </>
  )
}

export default Topnavbar
