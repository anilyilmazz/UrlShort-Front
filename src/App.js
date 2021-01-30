import Gourl from './Components/Gourl';
import Urlinput from './Components/Urlinput';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <div className="App mt-3">
      <Router>
        <Switch>
          <Route path="/:url" component={Gourl} />
          <Route path="/" component={Urlinput} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
