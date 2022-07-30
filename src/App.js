// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection'
import FooterSection from './FooterSection';
import FifthSection from './FifthSection'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection /> 
      <FifthSection/>
      <FooterSection/> 
    </div>
  );
}

export default App;
