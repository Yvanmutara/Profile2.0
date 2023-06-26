import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Overview = () => {
    const styleObject = {
        black:{
            color: 'black',
        }
    }
  return (
    <div className="tab-pane active" id="home" role="tabpanel">
      <div className="row">
          <div className="col-xxl-3">
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-3">Info</h5>
                      <div className="table-responsive">
                          <table className="table table-borderless mb-0">
                              <tbody>
                                  <tr>
                                      <th className="ps-0" scope="row">Full Name :</th>
                                      <td className="text-muted ">Y Mutara</td>
                                  </tr>
                                  <tr>
                                      <th className="ps-0 " scope="row">Mobile 1:</th>
                                      <td className="text-muted">+(31) 687 62 11 14</td>
                                  </tr>
                                  <tr>
                                      <th className="ps-0 " scope="row">Mobile 2:</th>
                                      <td className="text-muted">+(34) 604 43 89 58</td>
                                  </tr>
                                  <tr>
                                      <th className="ps-0 " scope="row">E-mail :</th>
                                      <td className="text-muted">mutara_yvan@hotmail.com</td>
                                  </tr>
                                  <tr>
                                      <th className="ps-0 " scope="row">Location :</th>
                                      <td className="text-muted">Castalla, Spain
                                      </td>
                                  </tr>
                                  {/* <tr>
                                      <th className="ps-0" scope="row">Joining Date</th>
                                      <td className="text-muted">24 Nov 2021</td>
                                  </tr> */}
                              </tbody>
                          </table>
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>
              {/* <!-- end card --> */}

              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-4">Programming Languages</h5>
                      <div className="d-flex flex-wrap gap-2 fs-15">
                          <a href="#javascript" className="badge badge-soft-primary">Python</a>
                          <a href="#javascript" className="badge badge-soft-primary">Php</a>
                          <a href="#javascript" className="badge badge-soft-primary">C#</a>
                          <a href="#javascript" className="badge badge-soft-primary">C++</a>
                          <a href="#javascript" className="badge badge-soft-primary">Javascript</a>
                          <a href="#javascript" className="badge badge-soft-primary">HTML</a>
                          <a href="#javascript" className="badge badge-soft-primary">CSS</a>
                          {/* <a href="#javascript" className="badge badge-soft-primary"></a>
                          <a href="#javascript" className="badge badge-soft-primary">illustrator</a> */}   
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>
              <div className="card ">
                  <div className="card-body">
                      <h5 className="card-title mb-4">Web Frameworks</h5>
                      <div className="d-flex flex-wrap gap-2 fs-15">
                          <a href="#javascript" className="badge badge-soft-primary">Django</a>
                          <a href="#javascript" className="badge badge-soft-primary">Django REST framework</a>
                          <a href="#javascript" className="badge badge-soft-primary">Laravel</a>
                          <a href="#javascript" className="badge badge-soft-primary">Sympfony</a>
                          <a href="#javascript" className="badge badge-soft-primary">React</a>
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>
              <div className="card ">
                  <div className="card-body">
                      <h5 className="card-title mb-4">Librairies</h5>
                      <div className="d-flex flex-wrap gap-2 fs-15">
                          <a href="#javascript" className="badge badge-soft-primary">Jquery</a>
                          <a href="#javascript" className="badge badge-soft-primary">Redux</a>
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-4">Database management</h5>
                      <div className="d-flex flex-wrap gap-2 fs-15">
                          <a href="#javascript" className="badge badge-soft-primary">PostgreSql</a>
                          <a href="#javascript" className="badge badge-soft-primary">Mysql</a>
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-4">Version control system</h5>
                      <div className="d-flex flex-wrap gap-2 fs-15">
                          <a href="#javascript" className="badge badge-soft-primary">Git (Github)</a>
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-4">Testing tool</h5>
                      <div className="d-flex flex-wrap gap-2 fs-15">
                          <a href="#javascript" className="badge badge-soft-primary">Pytest</a>
                          <a href="#javascript" className="badge badge-soft-primary">Postman</a>
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-4">Cloud</h5>
                      <div className="d-flex flex-wrap gap-2 fs-15">
                          <a href="#javascript" className="badge badge-soft-primary">AWS</a>
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-4">Other related technologie skills</h5>
                      <div className="d-flex flex-wrap gap-2 fs-15">
                          <a href="#javascript" className="badge badge-soft-primary">Ajax</a>
                          <a href="#javascript" className="badge badge-soft-primary">Docker</a>
                          <a href="#javascript" className="badge badge-soft-primary">Scrum agile methodologie</a>
                          <a href="#javascript" className="badge badge-soft-primary">Arduino</a>
                          <a href="#javascript" className="badge badge-soft-primary">Raspberry Pi</a>
                          <a href="#javascript" className="badge badge-soft-primary">Linux distributions(debian, ubuntu)</a>
                          <a href="#javascript" className="badge badge-soft-primary">MS office</a>
                          <a href="#javascript" className="badge badge-soft-primary">Power BI</a>
                          {/* <a href="#javascript" className="badge badge-soft-primary">ssl terminal</a> */}
                      </div>
                  </div>
                  {/* <!-- end card body --> */}
              </div>

          </div>
          {/* <!--end col--> */}
          <div className="col-xxl-9">
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-3">WHO AM I</h5>
                      <p>Highly skilled Django Python 
                          Engineer with 4 years of 
                          experience in developing web 
                          applications and APIs. Strong 
                          understanding of software 
                          development principles, database 
                          design, security and performance practices. 
                          Passionate about creating robust 
                          and scalable solutions. Excellent 
                          problem-solving and 
                          communication skills</p>
                      <p>My main skill is designing , developing and maintain web application using django framework and react js</p><br></br><br></br>

                            
                      <p>What to expect from me: <br></br></p>
                        <Carousel 
                        infiniteLoop={true}
                        showThumbs={false}
                        autoPlay={true}
                        interval={3000}
                        useKeyboardArrows={true}
                        >
                        <div>
                            <img src="assets/images/customize.jpg" />
                            <p className="legend fst-italic text-muted" style={styleObject.black}>
                                Development using  Django & React
                            </p>
                        </div>
                        <div>
                            <img src="assets/images/db.jpeg" />
                            <p className="legend fst-italic text-muted">
                                Database management
                            </p>
                        </div>
                        <div>
                            <img src="assets/images/api.jpg" />
                            <p className="legend fst-italic text-muted">
                                Api's & Microservices
                            </p>
                        </div>
                        <div>
                            <img src="assets/images/debug.webp" />
                            <p className="legend fst-italic text-muted">
                                Testing & Debugging
                            </p>
                        </div>
                        <div>
                            <img src="assets/images/security.jpg" />
                            <p className="legend fst-italic text-muted">
                                Security & maintenance
                            </p>
                        </div>
                        <div>
                            <img src="assets/images/optimization.png" />
                            <p className="legend fst-italic text-muted">
                                Application optimization
                            </p>
                        </div>
                        <div>
                            <img src="assets/images/git.png" />
                            <p className="legend fst-italic text-muted">
                                Deplyoment
                            </p>
                        </div>
                        </Carousel>
                          <p className='text-muted'><em>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Web-applications development, the backend with django and django REST framework API's, while the frontend with react framework and other third part libraries(material design, etc...)<br></br>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Strong understanding of database management, structure , designing and implementing(django ORM layer for example) for store and retrieve data's<br></br>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Building Api's and microservices with django and django REST framework.<br></br>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Testing and debugging using pytest and pytest-django to ensure the quality and reliability of the application.<br></br>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Being familiar with common security practices for implementing to protect user data and prevent common vulnerability.<br></br>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Optimization of the application's performance by analyzing and improving its speed, scalability and resources usage.<br></br>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - For de apps version control, i am familiar with Git, a crucial tool to manage code changes, track project progress and coordinate with team members, stackholders, etc ...<br></br>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Deployment django application to production environment.<br></br>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Enabling user experience by implementing the frontend with react , html/css en javascript to create user interfaces.<br></br>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          - Continuousely learning and self-improvement to stay up to date with the latest technologies methodes,libraries, etc...<br></br>                        
                          </em></p>
                      
                      {/* <p>You always want to make sure that your busness application stable and fast well together and try to track data's in real time.</p> */}
                      <div className="row">
                          <div className="col-6 col-md-4">
                              <div className="d-flex mt-4">
                                  <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                      <div className="avatar-title bg-light rounded-circle fs-16 text-primary shadow">
                                        <PublicIcon />         
                                      </div>
                                  </div>
                                  <div className="flex-grow-1 overflow-hidden">
                                      <p className="mb-1">Website :</p>
                                      <a href="https://yvanmutara.github.io/Profile2.0/" className="fw-semibold">www.mutara.portofolio.com</a>
                                  </div>
                              </div>
                          </div>
                          {/* <!--end col--> */}
                      </div>
                      {/* <!--end row--> */}
                  </div>
                  {/* <!--end card-body--> */}
              </div>
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Projects</h5><br></br>
                      {/* <!-- Swiper --> */}
                     
                      <Carousel
                        className='mt-n4'
                        infiniteLoop={true}
                        showThumbs={false}
                        autoPlay={true}
                        interval={3000}
                        useKeyboardArrows={true}
                      >
                        <div className="card profile-project-card profile-project-success mb-0">
                                    <div className="card-body p-4">
                                        <div className="d-flex">
                                            <div className="flex-grow-1 text-muted overflow-hidden">
                                                <h5 className="fs-14 text-truncate mb-1">
                                                    <Link to="/404" className="text-dark">AFRADEM</Link>
                                                </h5>
                                                <p className="text-muted text-truncate mb-0">Last Update : <span className="fw-semibold text-dark">22-06-2023</span></p>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <div className="badge badge-soft-warning fs-10"> Inprogress</div>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div>
                                                        <h5 className="fs-12 text-muted mb-0"> Owner :</h5>
                                                    </div>
                                                    <div className="avatar-group">
                                                        <div className="avatar-group-item shadow" style={{backgroundColor:'red'}}>
                                                            <div className="avatar-xs" >
                                                                <img src="assets/images/logo_afradem.png" alt="" className="rounded-circle img-fluid" />
                                                            </div>
                                                        </div>
                                                        {/* <div className="avatar-group-item shadow">
                                                            <div className="avatar-xs">
                                                                <img src="assets/images/users/avatar-5.jpg" alt="" className="rounded-circle img-fluid" />
                                                            </div>
                                                        </div>
                                                        <div className="avatar-group-item shadow">
                                                            <div className="avatar-xs">
                                                                <div className="avatar-title rounded-circle bg-light text-primary">
                                                                    A
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="avatar-group-item shadow">
                                                            <div className="avatar-xs">
                                                                <img src="assets/images/users/avatar-2.jpg" alt="" className="rounded-circle img-fluid" />
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card body --> */}
                        </div>
                        <div className="card profile-project-card profile-project-danger mb-0">
                                    <div className="card-body p-4">
                                        <div className="d-flex">
                                            <div className="flex-grow-1 text-muted overflow-hidden">
                                                <h5 className="fs-14 text-truncate mb-1">
                                                    <a href="https://www.simbiozefootball.com/NEW/index.php?lang=en" target="_blank"  className="text-dark">Simbioze Football</a>
                                                </h5>
                                                <p className="text-muted text-truncate mb-0"> Last Update : <span className="fw-semibold text-dark">2019</span></p>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <div className="badge badge-soft-success fs-10"> Completed</div>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div>
                                                        <h5 className="fs-12 text-muted mb-0"> Owner :</h5>
                                                    </div>
                                                    <div className="avatar-group">
                                                        <div className="avatar-group-item shadow">
                                                            <div className="avatar-xs">
                                                                <img src="assets/images/simbiozelogo.png" alt="" className="rounded-circle img-fluid" />
                                                            </div>
                                                        </div>
                                                        {/* <div className="avatar-group-item shadow">
                                                            <div className="avatar-xs">
                                                                <div className="avatar-title rounded-circle bg-light text-primary">
                                                                    C
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card body --> */}
                        </div>
                      </Carousel>

                  </div>
                  {/* <!-- end card body --> */}
              </div>
              {/* <!-- end card --> */}

          </div>
          {/* <!--end col--> */}
      </div>
        {/* <!--end row--> */}
    </div>
  )
}

export default Overview
