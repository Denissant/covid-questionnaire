import { Route, Routes } from 'react-router-dom';
import { AnimatedBox, Background, FormWrapper } from 'components';
import { LandingPage, PersonalDetailsPage, CovidPage } from 'pages';

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
            <Route path='vaccine' element={<PersonalDetailsPage />} />
            <Route path='policy' element={<PersonalDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
