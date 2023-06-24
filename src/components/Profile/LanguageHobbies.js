import React,{useEffect,useRef} from 'react'
import Mychart from './Mychart';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const LanguageHobbies = () => {
  
  
  return (
        <div className="tab-pane fade" id="languagehobby" role="tabpanel">
           <div className='card'>
                <div className='card card-body block'>
                
                <div className="row"> 
               
              <div className='col-lg-6'>
                <h1>Languages</h1><br></br>
                {/* <p>As one of the people who like to travel, visit different countries and cultures, I also like to learn different languages and cultures. Language is a truly tool to understand the true meaning of people's cultures and principles.</p> */}
                <div>
                    <Mychart />;
                </div>
                
              </div>
              <div className='col-lg-6'>
                  <h1>Hobby's</h1><br></br> 
                  <Carousel 
                    infiniteLoop={true}
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    useKeyboardArrows={true}
                        >
                        <div>
                            <img src="assets/images/music1.jpg" />
                            <p className="legend fst-italic text-muted">
                                Music production
                            </p>
                        </div>
                        <div>
                            <img src="assets/images/sport.jpg" />
                            <p className="legend fst-italic text-muted">
                                Play football
                            </p>
                        </div>
                        <div>
                            <img src="assets/images/traveling.webp" />
                            <p className="legend fst-italic text-muted">
                                Traveling
                            </p>
                        </div>
                    </Carousel>
              </div>
        
 
  </div>
                </div>
           </div>
            
        </div>
  )
}
