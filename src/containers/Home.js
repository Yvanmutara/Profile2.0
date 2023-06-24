import React,{useEffect,useState} from 'react'
import Topnavbar from '../components/Navbar/Topnavbar'
import Footer from '../components/Footer'
import Profile from './Profile'
import Loading from 'react-loading-components';
const Home = () => {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as per your needs
  })

  if(loading)
  {
    return <div className='text-center'>
      <Loading type='three_dots' width={372} height={500} fill='#4252c9' /> 
      <h1>Y MUTARA</h1>
    
    </div>
  }
  return (
    <>
    <div id="layout-wrapper" allowFullScreen>
      <Topnavbar />
      <div className="main-content">
        <div className="page-content">
          <Profile />
        </div>
      </div>   
      <Footer />
    </div>
    
    </>
    
  )
}

export default Home
