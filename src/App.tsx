import { Route, Routes } from 'react-router-dom';
import { AnimatedBox, Background, FormWrapper } from 'components';
import {
  LandingPage,
  PersonalDetailsPage,
  VaccinePage,
  CovidPage,
  PolicyPage,
} from 'pages';

function App() {
  return (
    <>
      <AnimatedBox />
      <Routes>
        <Route path='/' element={<Background />}>
          <Route index element={<LandingPage />} />
          <Route path='form' element={<FormWrapper />}>
            <Route path='personal-details' element={<PersonalDetailsPage />} />
            <Route path='covid' element={<CovidPage />} />
            <Route path='vaccine' element={<VaccinePage />} />
            <Route path='policy' element={<PolicyPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
