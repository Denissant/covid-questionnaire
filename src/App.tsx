import LandingPage from './pages/LandingPage';
import Background from './components/Background';
import AnimatedBox from './components/AnimatedBox';

function App() {
  return (
    <Background>
      <AnimatedBox />
      <LandingPage />
    </Background>
  );
}

export default App;
