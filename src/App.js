import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <main>
          <BrowserRouter>       
            <Switch>
            <Route path="/" component={Welcome} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
  );
} 
 
export default App;
