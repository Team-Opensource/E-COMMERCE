import './App.css';
import './Product.css';
import Card from './Components/Card';
import Nav from './Components/nav/Nav';
import Line from './Components/Line/Line';
import Showcase from './Components/Showcase/Showcase';
import About from './Components/about/About';

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


