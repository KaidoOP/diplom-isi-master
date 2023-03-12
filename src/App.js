import './App.css';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm'
// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import Pages
import Homes from './Pages/Homes';
import NotFound from './Pages/NotFound/NotFound';
import CoursesList from './Pages/CoursesList/CoursesList';
import KursPage2Container from './Pages/KursPages2/KursPage2Container';
import Faq from './Pages/Faq/Faq';
import ScrollHander from './Companents/ScrollHander';

AOS.init();

function App() {

  return (
    <>
      <ScrollHander />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homes />} />
          <Route path='home' element={<Homes />} />
          <Route path='*' element={<NotFound />} />
          <Route path='courses-list-4-columns' element={<CoursesList />} />
          <Route path='courses-list-4-columns/2' element={<KursPage2Container />} />
          <Route path='faq' element={<Faq />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
