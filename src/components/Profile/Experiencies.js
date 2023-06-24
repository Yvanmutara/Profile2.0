import React from 'react'

const Experiencies = () => {
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
                            <p className="text-muted mb-2">• Develop and maintain web application using Django,Python , Javascript and React.</p>
                            <p className="text-muted mb-2">• Collaborate with cross-functional teams to gather requirements and design scalable solutions.</p>
                            <p className="text-muted mb-2">• Implement RESTful API’S for data retrieval and manipulation</p>
                            <p className="text-muted mb-2">• Optimize application performance through code refactoring and database query optimization.</p>
                            <p className="text-muted mb-2">• Analyzing data</p>
                            <p className="text-muted mb-2">• Help team members to understand the fundamentals of application development.</p>
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
                            <p className="text-muted mb-2">• Develop and maintain applications for differents custormers.</p>
                            <p className="text-muted mb-2">• Develop new funtionalities in de Niagara environment to be able to communicate with third part API’S.</p>
                            <p className="text-muted mb-2">• Uderstanding the fundamentals of hardware side (sensors , motors, cables)</p>
                            
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
                            <p className="text-muted mb-2">• Develop and maintain the website.</p>
                            <p className="text-muted mb-2">• Help in maintaining the intranet app inside the compagny.</p>
                            <p className="text-muted mb-2">• Develop microservices needed in the compagny.</p>
                            <p className="text-muted mb-2">• Managing social apps for the compagny.</p>
                            <p className="text-muted mb-2">• Making flyers, video’s, posters for promotions.</p>
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

export default Experiencies
