import LandingPage from './pages/LandingPage';
import Background from './components/Background';
import AnimatedBox from './components/AnimatedBox';
import { Route, Routes } from 'react-router-dom';
import FormWrapper from './components/FormWrapper';
import PersonalDetailsPage from './pages/PersonalDetailsPage';

function App() {
  return (
    <>
      <AnimatedBox />
      <Routes>
        <Route path='/' element={<Background />}>
          <Route index element={<LandingPage />} />
          <Route path='form' element={<FormWrapper />}>
            <Route path='personal-details' element={<PersonalDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
