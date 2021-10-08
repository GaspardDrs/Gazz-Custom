import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/home/index';
import Header from '../components/Header/index';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Rate from '../components/Rate';
import StyledApp from './style';

function App() {
  return (
    <div className='App'>
      <StyledApp>
        <Router>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/my-app' component={Gallery} />
          <Route path='/stats' component={Rate} />
          <Route path='/trend' component={Contact} />
        </Router>
      </StyledApp>
    </div>
  );
}

export default App;
