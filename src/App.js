import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import About from './pages/About';
function App() {

  const screenName = "Home Screen...."
  const screenName1 = "About us screen "

  return (
    <div style={{backgroundColor:"red", flex:1, alignSelf:"center",justifySelf:"center",alignItems:"center"}} className="App">
 <Home screenName={screenName} />
 <Contact />
 <Portfolio />
 <Blog />
 <About />
    </div>
  );
}

export default App;
