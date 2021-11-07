import logo from './logo.svg';
import './App.css';
import StartScreen from './components/startScreen/startScreen';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SettingPage from './components/settings/settingPage';
import GetData from './components/fetch/fetch';

function App() {

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/setting">Setting</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/setting">
              <Setting />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

function Home() {
  return (
    <div className="App">
      <GetData />
    </div>
  );
}

function Setting() {
  return (
    <>
      <SettingPage />
    </>
  );
}

export default App;
