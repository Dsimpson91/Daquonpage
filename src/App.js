import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Switch>
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Welcome} />
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;