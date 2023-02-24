import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className='info'>
      <Info image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs"/>
      <Info image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" title="Components" text="Build encapsulated components that manage their state"/>
      <Info image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" title="Single-Way" text="A set of immutable values are passed to the components"/>
      <Info image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" title="JSX" text="Statically types, designed to run on modern browsers"/>
      </div>
    </div>
  );
}

export default App;
