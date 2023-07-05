import React from 'react'
import { withNamespaces } from 'react-i18next';

const Educations = ({ t }) => {
  return (
        <div className="tab-pane fade" id="education" role="tabpanel">
            <div className="card">
                <div className="card-body">
                    {/* <h5 className="card-title mb-3"></h5> */}
                    <div className="acitivity-timeline">
                        <div className="acitivity-item d-flex">
                        
                            <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                <div className="avatar-title bg-soft-success text-success rounded-circle shadow">
                                    R
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">RIJN IJSSEL • ARNHEM <span className="badge bg-soft-primary text-primary align-middle">2017 – 2019</span><small className='text-muted text-primary'> The Netherlands</small></h6>
                                <small className="mb-0 text-muted">{t('relevant_course_work')} : </small><br></br><br></br>
                                <div className="d-flex flex-wrap gap-2 fs-15">
                                    <a href="#javascript" className="badge badge-soft-primary">Data Structures</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Algorithms</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Software Engineering</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Database Management Systems</a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                <div className="avatar-title bg-soft-success text-success rounded-circle shadow">
                                    D
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">DE HAN • ARNHEM <span className="badge bg-soft-primary text-primary align-middle">2016 – 2017</span><small className='text-muted text-primary'> The Netherlands</small></h6>
                                <small className="mb-0 text-muted">{t('relevant_course_work')}: </small><br></br><br></br>
                                <div className="d-flex flex-wrap gap-2 fs-15">
                                    <a href="#javascript" className="badge badge-soft-primary">Mathematics</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Physics</a>
                                    <a href="#javascript" className="badge badge-soft-primary">English</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Nederlands</a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                <div className="avatar-title bg-soft-success text-success rounded-circle shadow">
                                    S
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">SCALDA • VLISSINGEN <span className="badge bg-soft-primary text-primary align-middle">2013 – 2015</span><small className='text-muted text-primary'> The Netherlands</small></h6>
                                <small className="mb-0 text-muted">{t('relevant_course_work')} : </small><br></br><br></br>
                                <div className="d-flex flex-wrap gap-2 fs-15">
                                    <a href="#javascript" className="badge badge-soft-primary">Operating systems (Windows,Debian,Linux)</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Servers and Network</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Security and maintenance of system (Windows & Linux)</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Troubleshouting and problems solving in de system</a>
                                </div>   
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                <div className="avatar-title bg-soft-success text-success rounded-circle shadow">
                                    E
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">ECOLE SECONDAIRE DE UVIRA • UVIRA <span className="badge bg-soft-primary text-primary align-middle">2004 – 2010</span><small className='text-muted text-primary'> DRC</small></h6>
                                <small className="mb-0 text-muted">{t('relevant_course_work')}: </small><br></br><br></br>
                                <div className="d-flex flex-wrap gap-2 fs-15">
                                    <a href="#javascript" className="badge badge-soft-primary">Mathematics</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Physics</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Chemistry</a>
                                    <a href="#javascript" className="badge badge-soft-primary">French</a>
                                    <a href="#javascript" className="badge badge-soft-primary">English</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Swahili</a>
                                </div><br></br>
                                <small className="mb-0 text-muted">Other courses: </small><br></br><br></br>
                                <div className="d-flex flex-wrap gap-2 fs-15">
                                    <a href="#javascript" className="badge badge-soft-primary">History</a>
                                    <a href="#javascript" className="badge badge-soft-primary">Geography</a>
                                    <a href="#javascript" className="badge badge-soft-primary">General knowledge</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end card-body--> */}
            </div>
        {/* <!--end card--> */}
        </div>
  )
}

export default withNamespaces()(Educations)