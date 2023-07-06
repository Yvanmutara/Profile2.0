import React,{useEffect,useState,useRef} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Button from '@mui/material/Button';
import { BiArrowToBottom} from "react-icons/bi";
// import pdfMake from 'pdfmake/build/pdfmake';

// import './extern.js'
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';
import { generatePDF } from './pdf';


const Topnavbar = ({ t }) => {
  
const refLang = useRef(null)
const changeLanguage = (lng) => {

  const flag = refLang.current
  if(flag && lng){
    if(lng === "sp")
    {
      flag.src = "assets/images/flags/spain.svg"
    }else if(lng === "en")
    {
      flag.src = "assets/images/flags/us.svg"
    }
  }
  i18n.changeLanguage(lng);
}
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
                  <Button  onClick={generatePDF}  size="small" title={t('cv')}>
                    {t('cv')}<BiArrowToBottom className='icon-size'/> 
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
                  <a href="https://www.linkedin.com/in/yvan-mutara-187415190" className="avatar-xs d-block">
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
            
          <div className="d-flex align-items-end">
          {/*   <div className="d-flex flex-wrap gap-1" >         
              <button onClick={() => changeLanguage('fr')}>fr</button>
            </div> */}
            <div className="dropdown ms-1 topbar-head-dropdown header-item">
                    <button type="button"  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img id="header-lang-img" ref={refLang} src="assets/images/flags/us.svg" alt="Header Language" height="20" className="rounded" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">

                        {/* <!-- item--> */}
                        <button onClick={() => changeLanguage('en')}  className="dropdown-item notify-item language py-2" data-lang="en" title="English">
                            <img src="assets/images/flags/us.svg" alt="user-image" className="me-2 rounded" height="18" />
                            <span className="align-middle">English</span>
                        </button>

                        {/* <!-- item--> */}
                        <button onClick={() => changeLanguage('sp')} className="dropdown-item notify-item language" data-lang="sp" title="Spanish">
                            <img src="assets/images/flags/spain.svg" alt="user-image" className="me-2 rounded" height="18" />
                            <span className="align-middle">Española</span>
                        </button>

                        {/* <!-- item--> */}
                        {/* <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr" title="German">
                            <img src="assets/images/flags/germany.svg" alt="user-image" className="me-2 rounded" height="18" /> 
                            <span class="align-middle">Deutsche</span>
                        </a> */}

                        {/* <!-- item--> */}
                       
                    </div>
                </div>  
          </div>
          <div className='d-flex align-items-end'>
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

export default withNamespaces()(Topnavbar)
