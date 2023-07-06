import React from 'react'
import Navigation from '../components/Profile/Navigation'
import Overview from '../components/Profile/Overview'
import Experiencies from '../components/Profile/Experiencies'
import Educations from '../components/Profile/Educations'
import LanguageHobbies from '../components/Profile/LanguageHobbies'
import ApartmentIcon from '@mui/icons-material/Apartment';
import Person3Icon from '@mui/icons-material/Person3';
import { FaCode } from "react-icons/fa";
import { withNamespaces } from 'react-i18next';

const Profile = ({t}) => {
  return (
    <div className="container-fluid">
       <div className="profile-foreground position-relative mx-n4 mt-n4">
         <div className="profile-wid-bg">
             <img src="assets/images/bg-new.webp" alt="" className="profile-wid-img" />
         </div>
        </div>
        <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
            <div className="row g-4">
                <div className="col-auto">
                    <div className="avatar-lg">
                        <img src="assets/images/profile-bg.jpg" alt="user-img" className="img-thumbnail rounded-circle" />
                    </div>
                </div>
                {/* <!--end col--> */}
                <div className="col">
                    <div className="p-2">
                        <h3 className="text-white mb-1"> Y Mutara </h3>
                        <p className="text-white-75">{t('function')} </p>
                        <div className="hstack text-white-50 gap-1">
                            <div className="me-2"><Person3Icon  /> Castalla, Spain</div>
                            <div className="me-2">
                                <ApartmentIcon  /> Factory zero
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12  text-center'>
                    <h4 className='greeting'>
                        {t('greeting')}
                        <div className="line">
                        <span aria-hidden="true" className="outer-line"></span>
                        <span className="icons-code">
                           <FaCode />
                        </span>
                        <span className="outer-line"></span>
                    </div>
                    </h4>
                    
                    
                {/* <h6 class="mb-1 text-white">
                    “ Be the change that you wish to 
                        see in the world ”<br></br><br></br>
                        <small class="text-muted">by MAHATMA GANDHI</small>
                </h6> */}
                </div>
                {/* <!--end col--> */}
                
                {/* <!--end col--> */}

            </div>
        {/* <!--end row--> */}
        </div>
        <div className="row text text-white-50 text-start">
            <div>
                {/* Navigation */}
                <Navigation />
                <div className="tab-content pt-4 text-muted">
                    {/* <Overview />  */}
                    <Overview />
                    {/*End <Overview />  */}
                    {/* <Experiencies /> */}
                    <Experiencies />
                    {/* End <Experiencies /> */}
                    <Educations />
                    <LanguageHobbies />
                </div>
                {/* tabs */}

            </div>
            
        </div>
        {/* <div className='row'>
            <div className='col-lg-12'>
                
            </div>
        </div> */}
        
    </div>
  )
}

export default withNamespaces()(Profile)