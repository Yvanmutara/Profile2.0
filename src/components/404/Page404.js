import React,{useEffect} from 'react'
import './404.css'
import Button from '@mui/material/Button';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const Page404 = () => {
  useEffect(() => {
    const importExternalScript = async () => {
      const externalScript = await import('./404js.js');
      // Use the functions/variables from the imported module
      
      // console.log(externalScript.someVariable);
    };
  
    importExternalScript();
  }, []);
  const navigate = useNavigate();
  const backtohome = () => {
    window.reload
    navigate('/Profile2.0/')
  }
  return (
    <div className='container_404'>
      
      <div className="text-404">
        <div>ERROR</div>
        <h1 className="h1">404</h1>
        <hr />
        <div>Page Not Found</div>
        <Button onClick={backtohome}> <BiArrowBack />  Go back to homepage </Button>
      </div>

        <div className="astronaut">
          <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" className="src" />
        </div>

      </div>
  )
}

export default Page404