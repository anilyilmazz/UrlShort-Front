import Gourl from './Components/Gourl';
import Urlinput from './Components/Urlinput';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import UrlContextProvider from './Contexts/UrlContext';


function App() {
  return (
    <div className="App mt-3">
      <Router>
        <Switch>
          <Route path="/:url" component={Gourl} />
          <UrlContextProvider>
            <Route path="/" component={Urlinput} />
          </UrlContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
