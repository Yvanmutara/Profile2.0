import React from 'react'
import Home from './containers/Home';
import Page404 from './components/404/Page404';
import {
  BrowserRouter as Router,Routes,
  Route
} from 'react-router-dom';

export const App = () => {

  return (
      <Routes>
        <Route exact path="/Profile2.0/" element={<Home />} />
        {/* 404-pagina voor niet-gevonden routes */}
        <Route path="*" element={<Page404 />} />
      </Routes>     
)
}


export default App;
