import './App.css';
import './Product.css';
import Card from './Components/Card';
import Nav from './components/nav/Nav';
import Line from './components/Line/Line';
import Showcase from './components/Showcase/Showcase';
import About from './components/about/About';

function App() {
  return (
    <>
     <Nav/>
     <main className='container'>
     <Line/>
     <Showcase/>
     <About/>
     <Line/>
     <Card/>
     </main>
    </>
  );
}

export default App;


