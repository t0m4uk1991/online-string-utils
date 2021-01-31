
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Base64Page from './pages/Base64Page';
import SymbolsCounterPage from './pages/SymbolsCounterPage';
import WordCounterPage from './pages/WordCounterPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Base64Page}/>
          <Route path="/symbolscounter" exact component={SymbolsCounterPage}/>
          <Route path="/wordscount" exact component={WordCounterPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
