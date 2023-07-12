import React from 'react'
import { withNamespaces } from 'react-i18next';
const Experiencies = ({t}) => {
  return (
    <div className="tab-pane fade" id="experience" role="tabpanel">
        <div className="card">
            <div className="card-body">
                {/* <h5 className="card-title mb-3">Designation && Entreprise</h5> */}
                <div className="acitivity-timeline">
                    <div className="acitivity-item d-flex">
                        {/* <div className="flex-shrink-0">
                            <img src="assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle acitivity-avatar shadow" />
                        </div> */}
                        <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                            <div className="avatar-title bg-soft-success text-success rounded-circle shadow">
                                D
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">DJANGO PYTHON ENGINEER • FACTORY ZERO B.V <span className="badge bg-soft-primary text-primary align-middle">2021 – 2023</span><small className='text-muted text-primary'> The Netherlands</small></h6>
                            <p className="text-muted mb-2">• {t('develop_and_maintain')}</p>
                            <p className="text-muted mb-2">• {t('collaborate_with_cross_function')}</p>
                            <p className="text-muted mb-2">• {t('implement_rest_full')}</p>
                            <p className="text-muted mb-2">• {t('optimize_applications')}</p>
                            <p className="text-muted mb-2">• {t('deployment_django')}</p>
                            <p className="text-muted mb-2">• {t('analize_data')}</p>
                            <p className="text-muted mb-2">• {t('help_team_members')}</p>
                            {/* <small className="mb-0 text-muted">Today</small> */}
                        </div>
                    </div>
                    <div className="acitivity-item py-3 d-flex">
                        <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                            <div className="avatar-title bg-soft-success text-success rounded-circle shadow">
                                T
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">TRIDIUM NIAGARA SOFTWARE ENGINEER • REME <span className="badge bg-soft-primary text-primary align-middle">2020 – 2021</span><small className='text-muted text-primary'> The Netherlands</small></h6>
                            <p className="text-muted mb-2">• {t('develop_maintain_2')}</p>
                            <p className="text-muted mb-2">• {t('develop_new_functionalities')}</p>
                            <p className="text-muted mb-2">• {t('understanding_the_fundamentals')}</p>
                            
                        </div>
                    </div>
                    <div className="acitivity-item py-3 d-flex">
                        <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                            <div className="avatar-title bg-soft-success text-success rounded-circle shadow">
                                F
                            </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">FULL STACK DEVELOPER • TRANSIMBIOZE LOGIC S.L VALENCIA <span className="badge bg-soft-primary text-primary align-middle">2019 – 2020</span><small className='text-muted'> Spain</small></h6>
                            <p className="text-muted mb-2">• {t('develop_maintain_3')}</p>
                            <p className="text-muted mb-2">• {t('help_in_maintaining_intranet')}</p>
                            <p className="text-muted mb-2">• {t('develop_microservices')}</p>
                            <p className="text-muted mb-2">• {t('managing_social_apps')}</p>
                            <p className="text-muted mb-2">• {t('making_flyers_videos')}</p>
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

export default withNamespaces()(Experiencies)
