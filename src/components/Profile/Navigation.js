import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LanguageIcon from '@mui/icons-material/Language';

const Navigation = () => {

  return (
    <div className="d-flex">
      {/* <!-- Nav tabs --> */}
        <ul className="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1" role="tablist">
            <li className="nav-item">
                <a  className="nav-link fs-14 active" data-bs-toggle="tab" href="#home" role="tab">
                <HomeIcon title="Home"/> 
                {/* <span className="d-none d-md-inline-block">HOME</span> */}
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link fs-14" data-bs-toggle="tab" href="#experience" role="tab">
                    <WorkIcon /> 
                    {/* className="d-inline-block d-md-none" */}
                    {/* <span className="d-none d-md-inline-block">EXPERIENCES</span> */}
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link fs-14" data-bs-toggle="tab" href="#education" role="tab">
                    <SchoolIcon /> 
                    {/* <span className="d-none d-md-inline-block">EDUCATIONS</span> */}
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link fs-14" data-bs-toggle="tab" href="#languagehobby" role="tab">
                    <LanguageIcon />|<SportsEsportsIcon  />
                    {/* <span className="d-none d-md-inline-block">LANGUAGES & HOBBY'S</span> */}
                </a>
            </li>
        </ul>
        {/* <div className="flex-shrink-0">
            <a href="pages-profile-settings.html" className="btn btn-success"><i className="ri-edit-box-line align-bottom"></i> OTHER SKILLS</a>
        </div> */}
    </div>
  )
}

export default Navigation
